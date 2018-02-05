<?php

namespace ApiBundle\Controller;

use AppBundle\Entity\Ring;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;


class ProductApiController extends FOSRestController
{
    /**
     * @ApiDoc(
     *      resource=true,
     *      section="Product",
     *      description="Get a list of rings",
     *      output = {
     *          "class"="array<AppBundle\Entity\Ring>",
     *          "groups"={"product-list"}
     *      },
     *      statusCodes={
     *          200="Returned when successful",
     *          500="Returned when other error occurs"
     *     },
     *     tags={"stable"="#93c00b"}
     * )
     * @Rest\Get("/product/ring")
     * @Rest\View(serializerGroups={"product-list"})
     */
    public function getRingsAction()
    {
        $rings = $this->getDoctrine()->getRepository(Ring::class)->findAll();

        return [
            'data' => $rings
        ];
    }

    /**
     * @ApiDoc(
     *      resource=true,
     *      section="Product",
     *      description="Get one ring",
     *      output = {
     *          "class"="<AppBundle\Entity\Ring>",
     *          "groups"={"product-view"}
     *      },
     *      statusCodes={
     *          200="Returned when successful",
     *          500="Returned when other error occurs"
     *     },
     *     tags={"stable"="#93c00b"}
     * )
     * @Rest\Get("/product/ring/{id}")
     * @Rest\View(serializerGroups={"product-view"})
     */
    public function getRingByIdAction(Ring $ring)
    {
        return [
            'data' => $ring
        ];
    }
}