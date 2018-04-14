<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        return $this->render('AppBundle:Default:index.html.twig');
    }

    /**
     * @Route("/product", name="product_list")
     */
    public function productListAction()
    {
        return $this->render('AppBundle:Default:product.html.twig');
    }

    /**
     * @Route("/product/{id}", name="product_view")
     */
    public function productViewAction(Product $product)
    {
        return $this->render('AppBundle:Default:product_view.html.twig');
    }

    /**
     * @Route("/contact", name="contact_form")
     */
    public function contactFormAction()
    {
        return $this->render('AppBundle:Default:contact.html.twig');
    }
}
