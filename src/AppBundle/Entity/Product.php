<?php

namespace AppBundle\Entity;

use Application\Sonata\MediaBundle\Entity\Media;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Gedmo\Timestampable\Traits\TimestampableEntity;
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
    use TimestampableEntity;

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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @Gedmo\Slug(fields={"name"})
     * @ORM\Column(length=128, unique=true)
     */
    private $slug;

    /**
     * @var string
     *
     * @JMS\Groups({"index", "product-list", "product-view"})
     * @ORM\Column(name="short_description", type="string", length=255)
     */
    private $shortDescription;

    /**
     * @var string
     *
     * @JMS\Groups({"product-list", "product-view"})
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     * One Product has many Images
     *
     * @JMS\Groups({"index", "product-list", "product-view"})
     * @ORM\ManyToMany(targetEntity="Application\Sonata\MediaBundle\Entity\Media", cascade={"remove"})
     * @ORM\JoinTable(name="product_images",
     *      joinColumns={@ORM\JoinColumn(name="product_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="image_id", referencedColumnName="id")}
     *      )
     */
    private $productImages;

    /**
     * @JMS\Groups({"index", "product-list", "product-view"})
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Category", inversedBy="products")
     * @ORM\JoinColumn(name="category_id", referencedColumnName="id")
     */
    private $category;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Collection", inversedBy="products")
     * @ORM\JoinColumn(name="collection_id", referencedColumnName="id")
     */
    private $collection;

    /**
     * @var array
     */
    private $files;

    public function __construct()
    {
        $this->productImages = new ArrayCollection();
    }

    public function __toString()
    {
        return ($this->name) ? "{$this->name}({$this->category->getName()})" : '';
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
     * Set short description
     *
     * @param string $shortDescription
     * @return $this
     */
    public function setShortDescription($shortDescription)
    {
        $this->shortDescription = $shortDescription;

        return $this;
    }

    /**
     * Get short description
     *
     * @return string
     */
    public function getShortDescription()
    {
        return $this->shortDescription;
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
     * Get slug.
     *
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * Add productImage
     *
     * @param Media $image
     * @return $this
     */
    public function addProductImage(Media $image)
    {
        if (!$this->productImages->contains($image)) {
            $this->productImages->add($image);
        }

        return $this;
    }

    /**
     * Remove productImage
     *
     * @param Media $image
     * @return $this
     */
    public function removeProductImage(Media $image)
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

    /**
     * Set collection
     *
     * @param Collection $collection
     * @return $this
     */
    public function setCollection(Collection $collection)
    {
        $this->collection = $collection;

        return $this;
    }

    /**
     * Get collection
     *
     * @return Collection
     */
    public function getCollection()
    {
        return $this->collection;
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
