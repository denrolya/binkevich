<?php
namespace AppBundle\DataFixtures\ORM\Dev;

use Application\Sonata\MediaBundle\Entity\Media;
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
            __DIR__ . '/product_image.yml',
            __DIR__ . '/category.yml',
            __DIR__ . '/collection.yml',
            __DIR__ . '/product.yml'
        ];
    }

    public function uploadedFile($assetPath = null)
    {
        if (is_null($assetPath)) {
            $file = __DIR__ . '/../../../../../assets/img/content/ring' . rand(1,4) . '.png';
        } else {
            $file = __DIR__ . "/../../../../../assets/$assetPath";
        }

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