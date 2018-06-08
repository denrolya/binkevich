<?php

namespace ApiBundle\Controller;

use AppBundle\Entity\Collection;
use AppBundle\Entity\File;
use AppBundle\Entity\Order;
use AppBundle\Form\OrderType;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiController extends FOSRestController
{
    /**
     * @Rest\View(serializerGroups={"index"})
     * @Rest\Get("/collections/index")
     */
    public function getIndexPageCollectionAction()
    {
        $indexPageCollection = $this
            ->getDoctrine()
            ->getRepository(Collection::class)
            ->getCollectionOverviewWithProducts();

        return $this->view([
            'data' => $indexPageCollection
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
            'data' => $collections
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
                $filename = $order->getId() . '-' . md5(uniqid()) . '.' . $uploadedFile->guessExtension();
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
}