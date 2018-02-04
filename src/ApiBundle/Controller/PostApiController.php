<?php
/**
 * Created by PhpStorm.
 * User: drolya
 * Date: 2017. 08. 25.
 * Time: 14:05
 */

namespace ApiBundle\Controller;

use AppBundle\Entity\Post as PostEntity;
use AppBundle\Form\PostType;
use FOS\RestBundle\Controller\Annotations\Get, FOS\RestBundle\Controller\Annotations\Post,
    FOS\RestBundle\Controller\Annotations\Delete, FOS\RestBundle\Controller\Annotations\View,
    FOS\RestBundle\Controller\Annotations\QueryParam;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\View\View as ViewTemplate;
use Symfony\Component\HttpFoundation\Request,
    Symfony\Component\HttpFoundation\Response;

class PostApiController extends FOSRestController
{
    /**
     * Get a list of posts
     *
     * @ApiDoc(
     *      resource=true,
     *      section="Post",
     *      description="Get a list of posts",
     *      output = {
     *          "class"="array<AppBundle\Entity\Post>",
     *          "groups"={"post-list"}
     *      },
     *      filters={
     *          {"name"="query", "dataType"="string"}
     *      },
     *      statusCodes={
     *          200="Returned when successful",
     *          500="Returned when other error occurs"
     *     },
     *     tags={"stable"="#93c00b"}
     * )
     * @View(serializerGroups={"post-list"})
     * @Get("/")
     * @QueryParam(name="query", requirements=".*", default="", description="Search query")
     */
    public function getPostsAction($query)
    {
        $posts = (empty($query))
            ? $this->getDoctrine()->getRepository(PostEntity::class)->findAll()
            : $this->get('app.search')->findPostsByQuery($query);

        return [
            'posts' => $posts
        ];
    }

    /**
     * Create new post entity
     *
     * @ApiDoc(
     *      resource=true,
     *      section="Post",
     *      description="Create new post entity",
     *      input={"class"="AppBundle\Form\PostType"},
     *      output = {
     *          "class"="array<AppBundle\Entity\Post>",
     *          "groups"={"post-view"}
     *      },
     *      statusCodes={
     *          200="Returned when successful",
     *          400="Returned if submitted request is bad",
     *          500="Returned when other error occurs"
     *     },
     *     tags={"stable"="#93c00b"}
     * )
     * @View(serializerGroups={"post-view"})
     * @Post("/")
     */
    public function createPostAction(Request $request)
    {
        $post = new Post();
        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if (!$form->isSubmitted()) {
            return new ViewTemplate("Form was not submitted!", Response::HTTP_BAD_REQUEST);
        } elseif ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($post);
            $em->flush();

            return [
                'post' => $post
            ];
        }

        return new ViewTemplate("Invalid request!", Response::HTTP_BAD_REQUEST);
    }

    /**
     * Get a post
     *
     * @ApiDoc(
     *      resource=true,
     *      section="Post",
     *      description="Get a post",
     *      output = {
     *          "class"="AppBundle\Entity\Post",
     *          "groups"={"post-view"}
     *      },
     *      statusCodes={
     *          200="Returned when successful",
     *          404="Returned when post was not found",
     *          500="Returned when other error occurs"
     *     },
     *     tags={"stable"="#93c00b"}
     * )
     * @View(serializerGroups={"post-view"})
     * @Get("/{id}", requirements={"id"="\d+"}))
     */
    public function getPostAction(PostEntity $post)
    {
        return [
            'post' => $post
        ];
    }

    /**
     * Edit post
     *
     * @ApiDoc(
     *      resource=true,
     *      section="Post",
     *      description="Edit post",
     *      output = {
     *          "class"="AppBundle\Entity\Post",
     *          "groups"={"post-view"}
     *      },
     *      input={"class"="AppBundle\Form\PostType"},
     *      requirements={{
     *          "name"="id",
     *          "dataType"="integer",
     *          "requirement"="^\d+$",
     *          "description"="Post id"
     *      }},
     *      statusCodes={
     *          200="Returned when successful",
     *          400="Returned if submitted request is bad",
     *          404="Returned when post was not found",
     *          500="Returned when other error occurs"
     *     },
     *     tags={"stable"="#93c00b"}
     * )
     * @View(serializerGroups={"post-view"})
     * @Post("/{id}", requirements={"id"="\d+"}))
     */
    public function editPostAction(Request $request, PostEntity $post)
    {
        $editForm = $this->createForm(PostType::class, $post);
        $editForm->handleRequest($request);

        if (!$editForm->isSubmitted()) {
            return new ViewTemplate("Form was not submitted!", Response::HTTP_BAD_REQUEST);
        } elseif ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return [
                'post' => $post
            ];
        }

        return new ViewTemplate("Invalid request!", Response::HTTP_BAD_REQUEST);
    }

    /**
     * Deletes a post entity
     *
     * @ApiDoc(
     *      resource=true,
     *      section="Post",
     *      description="Deletes a post entity",
     *      requirements={{
     *          "name"="id",
     *          "dataType"="integer",
     *          "requirement"="^\d+$",
     *          "description"="Post id"
     *      }},
     *      statusCodes={
     *         204="Returned when successful",
     *         404="Returned when post was not found",
     *     },
     *     tags={"stable"="#93c00b"}
     * )
     * @Delete("/{id}", requirements={"id"="\d+"}))
     */
    public function deletePostAction(Request $request, PostEntity $post)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($post);
        $em->flush();

        return ;
    }
}