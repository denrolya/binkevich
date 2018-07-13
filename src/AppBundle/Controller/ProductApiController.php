<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Category;
use AppBundle\Entity\ProductImage;
use AppBundle\Entity\Product;
use AppBundle\Form\ProductType;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\View as ViewTemplate;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class ProductApiController extends FOSRestController
{
    /**
     * @ApiDoc(
     *      resource=true,
     *      section="Product",
     *      description="Get a list of rings",
     *      output = {
     *          "class"="array<AppBundle\Entity\Product>",
     *          "groups"={"product-list"}
     *      },
     *      statusCodes={
     *          200="Returned when successful",
     *          500="Returned when other error occurs"
     *     },
     *     tags={"stable"="#93c00b"}
     * )
     * @Rest\Get("/products/ring")
     * @Rest\View(serializerGroups={"product-list"})
     */
    public function getRingsAction()
    {
        $rings = $this
            ->getDoctrine()
            ->getRepository(Product::class)
            ->findByCategory(Category::CATEGORY_RING);

        return [
            'data' => $rings
        ];
    }

    /**
     * @ApiDoc(
     *      resource=true,
     *      section="Product",
     *      description="Get one product",
     *      output = {
     *          "class"="<AppBundle\Entity\Product>",
     *          "groups"={"product-view"}
     *      },
     *      statusCodes={
     *          200="Returned when successful",
     *          500="Returned when other error occurs"
     *     },
     *     tags={"stable"="#93c00b"}
     * )
     * @Rest\Get("/products/{id}")
     * @Rest\View(serializerGroups={"product-view"})
     */
    public function getRingByIdAction(Product $product)
    {
        return [
            'data' => $product
        ];
    }

    /**
     * Create new ring entity
     *
     * @ApiDoc(
     *      resource=true,
     *      section="Product",
     *      description="Create new ring entity",
     *      input={"class"="AppBundle\Form\ProductType"},
     *      output = {
     *          "class"="array<AppBundle\Entity\Ring>",
     *          "groups"={"product-view"}
     *      },
     *      statusCodes={
     *          200="Returned when successful",
     *          400="Returned if submitted request is bad",
     *          500="Returned when other error occurs"
     *     },
     *     tags={"stable"="#93c00b"}
     * )
     * @Rest\View(serializerGroups={"product-view"})
     * @Rest\Post("/products")
     */
    public function createProductAction(Request $request)
    {
        $product = new Product();
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if (!$form->isSubmitted()) {
            return new ViewTemplate("Form was not submitted!", Response::HTTP_BAD_REQUEST);
        } elseif ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();

            $uploadedFiles = $request->files->get('product')['files'];

//            foreach($uploadedFiles as $uploadedFile) {
                $productImage = new ProductImage($uploadedFiles);
                $productImage->setProduct($product);
                $em->persist($productImage);
//            }

            $em->persist($product);

            $em->flush();

            return [
                'data' => $product
            ];
        }

        return new ViewTemplate("Invalid request!", Response::HTTP_BAD_REQUEST);
    }

    /**
     * @ApiDoc(
     *      resource=true,
     *      section="Product",
     *      description="Get a list of products in category",
     *      output = {
     *          "class"="array<AppBundle\Entity\Product>",
     *          "groups"={"product-list"}
     *      },
     *      statusCodes={
     *          200="Returned when successful",
     *          500="Returned when other error occurs"
     *     },
     *     tags={"stable"="#93c00b"}
     * )
     * @Rest\Get("/categories/{slug}")
     * @Rest\View(serializerGroups={"product-list"})
     */
    public function getCategoryProductsAction(Category $category)
    {
        return [
            'data' => $category->getProducts()
        ];
    }
}