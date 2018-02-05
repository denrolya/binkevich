<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class ProductImage
 *
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProductImageRepository")
 */
class ProductImage extends File
{
    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="Product", inversedBy="productImages")
     * @ORM\JoinColumn(name="product_id", referencedColumnName="id", nullable=false)
     */
    private $product;

    /**
     * Set product
     *
     * @param Product $product
     * @return $this
     */
    public function setProduct(Product $product)
    {
        $this->product = $product;

        return $this;
    }

    /**
     * Get product
     *
     * @return Product
     */
    public function getProduct()
    {
        return $this->product;
    }
}