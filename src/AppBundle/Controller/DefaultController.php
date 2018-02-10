<?php

namespace AppBundle\Controller;

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
     * @Route("/product/1", name="product_view")
     */
    public function productViewAction()
    {
        return $this->render('AppBundle:Default:product_view.html.twig');
    }
}
