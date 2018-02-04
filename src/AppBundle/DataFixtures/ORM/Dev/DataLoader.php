<?php
namespace AppBundle\DataFixtures\ORM\Dev;

use Faker\Factory;
use Hautelook\AliceBundle\Doctrine\DataFixtures\AbstractLoader;

class DataLoader extends AbstractLoader
{
    /**
    * {@inheritDoc}
    */
    public function getFixtures()
    {
        return  [
            __DIR__ . '/post.yml',
            __DIR__ . '/user.yml',
            __DIR__ . '/slider_picture.yml',
        ];
    }
}