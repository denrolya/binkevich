<?php

namespace ApiBundle\Controller;

use AppBundle\Entity\Collection;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Response;

class ApiController extends FOSRestController
{
    /**
     * @Rest\View(serializerGroups={"index"})
     * @Rest\Get("/index/collection")
     */
    public function getIndexPageCollectionAction()
    {
        $indexPageCollection = $this
            ->getDoctrine()
            ->getRepository(Collection::class)
            ->findOneBy([
                'isDisplayedOnIndexPage' => true
            ]);

        if (!$indexPageCollection) {
            return $this->view(null, Response::HTTP_NO_CONTENT);
        }

        return [
            'data' => $indexPageCollection->getProductsFormatted()
        ];
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

        return [
            'data' => $collections
        ];
    }

    /**
     * @Rest\Get("/collections/{slug}")
     */
    public function getCollectionProductsAction(Collection $collection)
    {
        return [
            'data' => $collection->getProductsFormatted()
        ];
    }
}