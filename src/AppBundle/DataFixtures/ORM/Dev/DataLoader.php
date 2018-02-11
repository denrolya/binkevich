<?php
namespace AppBundle\DataFixtures\ORM\Dev;

use Faker\Factory;
use Hautelook\AliceBundle\Doctrine\DataFixtures\AbstractLoader;
use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class DataLoader extends AbstractLoader
{
    /**
    * {@inheritDoc}
    */
    public function getFixtures()
    {
        return  [
            __DIR__ . '/user.yml',
            __DIR__ . '/category.yml',
            __DIR__ . '/product.yml',
            __DIR__ . '/product_image.yml'
        ];
    }

    public function uploadedFile()
    {
        $faker = Factory::create();
        $file = $faker->image(__DIR__ . '/../../../../../web/uploads/products/test', 640, 480, 'cats');

        return $uploadedFile = new UploadedFile(
            $file,
            $file,
            mime_content_type($file),
            filesize($file),
            null,
            true
        );
    }
}