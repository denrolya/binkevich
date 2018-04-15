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
     * @Route("/collections", name="collection_list")
     */
    public function collectionListAction()
    {
        return $this->render('AppBundle:Default:collection.html.twig');
    }

    /**
     * @Route("/collections/{slug}", name="collection_product_list")
     */
    public function collectionProductListAction($slug)
    {
        return $this->render('AppBundle:Default:product.html.twig');
    }

    /**
     * @Route("/categories", name="category_list")
     */
    public function categoryListAction()
    {
        return $this->render('AppBundle:Default:category.html.twig');
    }

    /**
     * @Route("/categories/{slug}", name="category_product_list")
     */
    public function categoryProductListAction()
    {
        return $this->render('AppBundle:Default:product.html.twig');
    }

    /**
     * @Route("/products/{id}", name="product_view")
     */
    public function productViewAction($id)
    {
        return $this->render('AppBundle:Default:product_view.html.twig');
    }

    /**
     * @Route("/lookbook", name="contact_form")
     */
    public function lookbookFormAction()
    {
        return $this->render('AppBundle:Default:lookbook.html.twig');
    }

    /**
     * @Route("/bespoke", name="contact_form")
     */
    public function bespokeFormAction()
    {
        return $this->render('AppBundle:Default:bespoke.html.twig');
    }

    /**
     * @Route("/contact", name="contact_form")
     */
    public function contactFormAction()
    {
        return $this->render('AppBundle:Default:contact.html.twig');
    }
}
