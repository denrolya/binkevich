<?php

namespace AppBundle\Entity;

use Application\Sonata\MediaBundle\Entity\Media;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use JMS\Serializer\Annotation as JMS;

/**
 * BespokeCarousel
 *
 * @ORM\Table(name="index_page_carousel")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\IndexPageCarouselRepository")
 */
class IndexPageCarousel
{
    const BESPOKE_CAROUSEL_SLUG = 'bespoke';
    const LOOKBOOK_CAROUSEL_SLUG = 'lookbook';

    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @JMS\Groups({"index"})
     * @ORM\Column(name="name", type="string", length=100, unique=true)
     */
    private $name;

    /**
     * @Gedmo\Slug(fields={"name"})
     * @JMS\Groups({"index"})
     * @ORM\Column(length=128, unique=true)
     */
    private $slug;

    /**
     * One Carousel has many Images
     *
     * @JMS\Groups({"index"})
     * @ORM\ManyToMany(targetEntity="Application\Sonata\MediaBundle\Entity\Media", cascade={"remove"})
     * @ORM\JoinTable(name="carousel_images",
     *      joinColumns={@ORM\JoinColumn(name="carousel_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="image_id", referencedColumnName="id")}
     *      )
     */
    private $images;

    public function __construct()
    {
        $this->images = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->name;
    }

    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return IndexPageCarousel
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param $slug
     * @return $this
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * Get slug.
     *
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * Add image
     *
     * @param Media $image
     * @return $this
     */
    public function addImage(Media $image)
    {
        if (!$this->images->contains($image)) {
            $this->images->add($image);
        }

        return $this;
    }

    /**
     * Remove image
     *
     * @param Media $image
     * @return $this
     */
    public function removeImage(Media $image)
    {
        if ($this->images->contains($image)) {
            $this->images->removeElement($image);
        }

        return $this;
    }

    /**
     * Get images
     *
     * @return ArrayCollection
     */
    public function getImages()
    {
        return $this->images;
    }
}
