<?php
namespace AppBundle\DataFixtures\ORM\Test;

use Faker\Factory;
use Hautelook\AliceBundle\Doctrine\DataFixtures\AbstractLoader;

class DataLoader extends AbstractLoader
{
    /**
    * {@inheritDoc}
    */
    public function getFixtures()
    {
        return [];
    }
}