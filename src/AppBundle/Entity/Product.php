<?php

namespace AppBundle\Entity;

use AppBundle\Traits\UpdatableTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;

/**
 * Product
 *
 * @JMS\ExclusionPolicy("none")
 * @ORM\Table(name="product")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProductRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Product
{
    use UpdatableTrait;

    /**
     * @var int
     *
     * @JMS\Groups({"product-list", "product-view"})
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @JMS\Groups({"product-list", "product-view"})
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @JMS\Groups({"product-view"})
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     * One Product has many Images
     *
     * @JMS\Groups({"product-list", "product-view"})
     * @ORM\ManyToMany(targetEntity="Application\Sonata\MediaBundle\Entity\Media")
     * @ORM\JoinTable(name="product_images",
     *      joinColumns={@ORM\JoinColumn(name="product_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="image_id", referencedColumnName="id", unique=true)}
     *      )
     */
    private $productImages;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Category", inversedBy="products")
     * @ORM\JoinColumn(name="category_id", referencedColumnName="id")
     */
    private $category;

    /**
     * @var array
     */
    private $files;

    public function __construct()
    {
        $this->productImages = new ArrayCollection();
    }

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return $this
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return $this
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Add productImage
     *
     * @param ProductImage $image
     * @return $this
     */
    public function addProductImage(ProductImage $image)
    {
        if (!$this->productImages->contains($image)) {
            $this->productImages->add($image);
        }

        return $this;
    }

    /**
     * Remove productImage
     *
     * @param ProductImage $image
     * @return $this
     */
    public function removeProductImage(ProductImage $image)
    {
        if ($this->productImages->contains($image)) {
            $this->productImages->removeElement($image);
        }

        return $this;
    }

    /**
     * Get productImages
     *
     * @return ArrayCollection
     */
    public function getProductImages()
    {
        return $this->productImages;
    }

    /**
     * Set category
     *
     * @param Category $category
     * @return $this
     */
    public function setCategory(Category $category)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get category
     *
     * @return Category
     */
    public function getCategory()
    {
        return $this->category;
    }

    public function getFiles()
    {
        return $this->files;
    }

    public function setFiles($files)
    {
        $this->files = $files;

        return $this;
    }
}
