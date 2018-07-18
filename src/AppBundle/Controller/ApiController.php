<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Category;
use AppBundle\Entity\Collection;
use AppBundle\Entity\File;
use AppBundle\Entity\Order;
use AppBundle\Form\OrderType;
use FOS\RestBundle\Controller\FOSRestController;
use Liplex\MultipleFileUploadBundle\Repository\MultipleFileUploadRepository;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Doctrine\ORM\PersistentCollection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Sonata\MediaBundle\Entity\BaseMedia;

class ApiController extends FOSRestController
{
    /**
     * @Rest\View(serializerGroups={"index"})
     * @Rest\Get("/collections/index")
     */
    public function getIndexPageCollectionAction()
    {
        $collectionRepo = $this
            ->getDoctrine()
            ->getRepository(Collection::class);

        $collection = $collectionRepo
            ->findOneBy(['isDisplayedOnIndexPage' => true]);

        $indexPageCollectionProductions = $collectionRepo
            ->getCollectionOverviewWithProducts($collection);

        return $this->view([
            'data' => [
                'slug' => $collection->getSlug(),
                'products' => $indexPageCollectionProductions
            ]
        ]);
    }

    /**
     * @Rest\View(serializerGroups={"index"})
     * @Rest\Get("/collections")
     */
    public function getCollectionsAction()
    {
        $collections = $this
            ->getDoctrine()
            ->getRepository(Collection::class)
            ->findAll();

        return $this->view([
            'data' => [
                'collections' => $collections,
            ]
        ]);
    }

    /**
     * @Rest\View(serializerGroups={"index"})
     * @Rest\Get("/categories")
     */
    public function getCategoriesAction()
    {
        $categories = $this
            ->getDoctrine()
            ->getRepository(Category::class)
            ->findAll();

        return $this->view([
            'data' => [
                'categories' => $categories
            ]
        ]);
    }

    /**
     * @Rest\View(serializerGroups={"product-list"})
     * @Rest\Get("/collections/{slug}")
     */
    public function getCollectionProductsAction(Collection $collection)
    {
        return $this->view([
            'data' => $collection
        ]);
    }

    /**
     * @Rest\Post("/orders")
     */
    public function placeOrderAction(Request $request)
    {
        $order = new Order();
        $form = $this->createForm(OrderType::class, $order);

        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');

            $em->persist($order);
            $em->flush();

            // TODO: Put to file manager
            if ($uploadedFile = $order->getUploadedFile()) {
                $filename = $order->getId() . '-' . md5(uniqid()) . '.' . $uploadedFile->getClientOriginalExtension();
                $orderDirAbsolutePath = $this->container->getParameter('files_dir') . '/' . $order->getId();
                $uploadedFile->move($orderDirAbsolutePath, $filename);

                $orderFile = (new File())
                    ->setName($filename)
                    ->setRelativePath('/uploads/orders/' . $order->getId() . '/' . $filename)
                    ->setAbsolutePath($orderDirAbsolutePath . '/' . $filename)
                    ->setSize($uploadedFile->getClientSize());

                $order->setFile($orderFile);

                $em->persist($orderFile);
                $em->flush();
            }

            return $this->view([
                'data' => $order
            ]);
        } else {
            return $this->view($form, Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Rest\Post("/media")
     */
    public function multipleImageUploadAction(Request $request)
    {
        $parameter = $request->request->all();

        $entityType = $parameter['entity'];
        $id = $parameter['id'];
        $field = $parameter['field'];

        $mediaManager = $this->get('sonata.media.manager.media');

        $configuration = $this->getEntityConfigurationFromMapping($entityType);

        /** @var MultipleFileUploadRepository $repository */
        $repository = $this->getDoctrine()->getRepository($configuration['class']);

        /** @var UploadedFile $file */
        $file = $request->files->get('file');

        if ($file === null) {
            throw new BadRequestHttpException('Not all mandatory parameters are given');
        }

        $fieldConfiguration = $this->getFieldConfigurationForField($field, $configuration);

        $mediaContext = $fieldConfiguration['context'];

        $entity = $repository->find($id);
        if ($entity === null) {
            throw new NotFoundHttpException('The entity you requested can not be found.');
        }

        $mediaClass = $this->getParameter('liplex_multiple_file_upload.media_class');

        /** @var BaseMedia $media */
        $media = new $mediaClass();
        $media->setBinaryContent($file);
        $media->setContext($mediaContext);
        $media->setProviderName($fieldConfiguration['provider']);

        $mediaManager->save($media);

        $this->setMediaForField($entity, $field, $media);

        $repository->store($entity);

        return [
            'mediaId' => $media->getId(),
        ];
    }

    /**
     * Get class from mapping.
     *
     * @param string $entityType
     *
     * @return array
     *
     * @throws BadRequestHttpException Thrown if no mapping available
     */
    private function getEntityConfigurationFromMapping($entityType)
    {
        /** @var array $mapping */
        $mapping = $this->getParameter('liplex_multiple_file_upload.mapping');

        foreach ($mapping as $entity) {
            $className = substr($entity['class'], strrpos($entity['class'], '\\') + 1);
            if ($className === $entityType) {
                return $entity;
            }
        }

        throw new BadRequestHttpException('Wrong mapping');
    }

    /**
     * Get field configuration from configuration.
     *
     * @param string $field
     * @param array  $configuration
     *
     * @return array
     *
     * @throws BadRequestHttpException Thrown if no context can be found in the configuration
     */
    private function getFieldConfigurationForField($field, array $configuration)
    {
        foreach ($configuration['fields'] as $fieldConfiguration) {
            if ($fieldConfiguration['field'] == $field) {
                return $fieldConfiguration;
            }
        }

        throw new BadRequestHttpException(sprintf('No context configuration found for the field %s', $field));
    }

    /**
     * Set media for field.
     *
     * @param object $entity
     * @param string $field
     * @param BaseMedia  $media
     *
     * @throws BadRequestHttpException Thrown if entity or field can not be found
     */
    private function setMediaForField($entity, $field, BaseMedia $media)
    {
        $getterFunction = 'get'.ucwords($field);
        $currentField = $entity->$getterFunction();

        $collectionClasses = [
            PersistentCollection::class,
            ArrayCollection::class,
        ];

        if (\in_array(get_class($currentField), $collectionClasses, true)) {
            $entity->$getterFunction()->add($media);
        } else {
            $setterFunction = 'set'.ucwords($field);
            $entity->$setterFunction($media);
        }
    }
}