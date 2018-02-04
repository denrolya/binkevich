<?php

namespace ApiBundle\Controller;

use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;

class ApiController extends FOSRestController
{
    /**
     * Get test data
     *
     * @ApiDoc(
     *      resource=true,
     *      section="Test",
     *      description="Get test data",
     *      tags={"test"="#93c00b"}
     * )
     * @Get("/test")
     */
    public function getTestDataAction()
    {
        return [
            'type' => 'test',
            'payload' => [
                'string' => 'test',
                'number' => 1,
                'empty' => null,
                'false' => false
            ]
        ];
    }
}