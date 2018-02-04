<?php

namespace AppBundle\Service;

use FOS\ElasticaBundle\Finder\TransformedFinder;

class SearchService
{
    private $postFinder;

    public function __construct(TransformedFinder $t)
    {
        $this->postFinder = $t;
    }

    public function findPostsByQuery($query)
    {
        $posts = $this->postFinder->find("*$query*");
        
        return $posts;
    }
}