<?php

namespace ApiBundle\Tests\Controller;

use ApiBundle\Controller\ApiController;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Class ApiControllerTest
 * @package ApiBundle\Tests\Controller
 * @coversDefaultClass ApiController
 */
class ApiControllerTest extends WebTestCase
{
    /**
     * @test
     * @covers getTestDataAction
     * @group health
     */
    public function getTestData()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/api/v1/test');

        $this->assertContains('{"type":"test","payload":{"string":"test","number":1,"empty":null,"false":false}}', $client->getResponse()->getContent());
    }
}
