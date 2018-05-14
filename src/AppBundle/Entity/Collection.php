<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use JMS\Serializer\Annotation as JMS;

/**
 * Category
 *
 * @JMS\ExclusionPolicy("none")
 * @ORM\Table(name="collection")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\CollectionRepository")
 */
class Collection
{
    /**
     * @var int
     *
     * @JMS\Groups({"index", "product-list", "product-view"})
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @JMS\Groups({"index", "product-list", "product-view"})
     * @ORM\Column(name="name", type="string", length=100, unique=true)
     */
    private $name;

    /**
     * @JMS\Groups({"index"})
     * @Gedmo\Slug(fields={"name"})
     * @ORM\Column(length=128, unique=true)
     */
    private $slug;

    /**
     * @JMS\Groups({"product-list", "product-view"})
     * @ORM\OneToMany(targetEntity="Product", mappedBy="collection")
     */
    private $products;

    /**
     * @var bool
     *
     * @JMS\Groups({"index"})
     * @ORM\Column(type="boolean")
     */
    private $isDisplayedOnIndexPage = false;

    public function __construct()
    {
        $this->products = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->getName();
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
     * @return $this
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
     * Get slug.
     *
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * Add product
     *
     * @param Product $product
     * @return $this
     */
    public function addProduct(Product $product)
    {
        if (!$this->products->contains($product)) {
            $this->products->add($product);
        }

        return $this;
    }

    /**
     * Remove product
     *
     * @param Product $product
     * @return $this
     */
    public function removeProduct(Product $product)
    {
        if ($this->products->contains($product)) {
            $this->products->removeElement($product);
        }

        return $this;
    }

    /**
     * Get products
     *
     * @return ArrayCollection
     */
    public function getProducts()
    {
        return $this->products;
    }

    /**
     * @param bool $isDisplayedOnIndexPage
     * @return $this
     */
    public function setIsDisplayedOnIndexPage($isDisplayedOnIndexPage)
    {
        $this->isDisplayedOnIndexPage = $isDisplayedOnIndexPage;

        return $this;
    }

    /**
     * @return bool
     */
    public function getIsDisplayedOnIndexPage()
    {
        return $this->isDisplayedOnIndexPage;
    }

    /**
     * Get products formatted
     */
    public function getProductsFormatted()
    {
        return [
            'rings' => $this->products->filter(function(Product $product) {
                return $product->getCategory()->getSlug() === 'rings';
            }),
            'earrings' => $this->products->filter(function(Product $product) {
                return $product->getCategory()->getSlug() === 'earrings';
            })->getValues(),
            'bangles' => $this->products->filter(function(Product $product) {
                return $product->getCategory()->getSlug() === 'bangles';
            })->getValues(),
            'pendants' => $this->products->filter(function(Product $product) {
                return $product->getCategory()->getSlug() === 'pendants';
            })->getValues()
        ];
    }
}
