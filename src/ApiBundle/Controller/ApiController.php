<?php

namespace ApiBundle\Controller;

use AppBundle\Entity\Collection;
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

        return $this->view([
            'data' => $indexPageCollection->getProductsFormatted()
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
     * @Rest\Get("/collections/{slug}")
     */
    public function getCollectionProductsAction(Collection $collection)
    {
        return $this->view([
            'data' => $collection->getProductsFormatted()
        ]);
    }

    /**
     * @Rest\Post("/order")
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

            return $this->view([
                'data' => $order
            ]);
        } else {
            return $this->view($form, Response::HTTP_BAD_REQUEST);
        }
    }
}