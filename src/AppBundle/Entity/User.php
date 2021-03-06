<?php

namespace AppBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $uniqueTaxReference;

    /**
     * @param string $uniqueTaxReference
     * @return $this
     */
    public function setUniqueTaxReference($uniqueTaxReference)
    {
        $this->uniqueTaxReference = $uniqueTaxReference;

        return $this;
    }

    /**
     * @return string
     */
    public function getUniqueTaxReference()
    {
        return $this->uniqueTaxReference;
    }
}