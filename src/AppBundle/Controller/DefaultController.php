<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Product;
use Application\Sonata\MediaBundle\Entity\Media;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\JsonResponse;

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
     * @Route("/collections/{slug}", name="collection_product_list")
     */
    public function collectionProductListAction($slug)
    {
        return $this->render('AppBundle:Default:collection.html.twig');
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
        return $this->render('AppBundle:Default:category.html.twig');
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

    /**
     * @Route("/product/{product_id}/image/{media_id}/thumb", name="show_product_media")
     * @Method({"GET"})
     * @ParamConverter("product", options={"id" = "product_id"})
     * @ParamConverter("media", options={"id" = "media_id"})
     */
    public function showImageAction(Media $media)
    {
        $imageProvider = $this->get('sonata.media.provider.image');

        $webPath = $this->get('kernel')->getRootDir().'/../web';

        $format = $imageProvider->getFormatName($media, 'small');
        $imagePath = $imageProvider->generatePublicUrl($media, $format);

        return new BinaryFileResponse($webPath . $imagePath);
    }

    /**
     * @Route("/product/{product_id}/media/{media_id}", name="delete_product_media")
     * @Method({"DELETE"})
     * @ParamConverter("product", options={"id" = "product_id"})
     * @ParamConverter("media", options={"id" = "media_id"})
     */
    public function deleteProductMediaAction(Product $product, Media $media)
    {
        $em = $this->get('doctrine.orm.entity_manager');
        $mediaManager = $this->get('sonata.media.manager.media');

        $product->removeProductImage($media);

        $mediaManager->delete($media);

        $em->flush();

        return new JsonResponse(null);
    }
}
