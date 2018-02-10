<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @Template()
     */
    public function indexAction()
    {
        return [];
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
}
