<?php

namespace AppBundle\Admin;

use AppBundle\Entity\IndexPageCarousel;
use Application\Sonata\MediaBundle\Entity\Media;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;

class IndexPageCarouselAdmin extends AbstractAdmin
{
    use ContainerAwareTrait;

    public function getDashboardActions()
    {
        $actions = [];
        $em = $this->getConfigurationPool()->getContainer()->get('doctrine.orm.entity_manager');

        $lookbookCarousel = $em
            ->getRepository(IndexPageCarousel::class)
            ->findOneBySlug(IndexPageCarousel::LOOKBOOK_CAROUSEL_SLUG);

        $bespokeCarousel = $em
            ->getRepository(IndexPageCarousel::class)
            ->findOneBySlug(IndexPageCarousel::BESPOKE_CAROUSEL_SLUG);

        if ($this->hasRoute('create') && $this->hasAccess('create')) {
            $actions['lookbook'] = [
                'label' => 'Lookbook',
                'translation_domain' => 'SonataAdminBundle',
                 'template' => $this->getTemplateRegistry()->getTemplate('action_edit'),
                'url' => $this->generateUrl('edit', ['id' => $lookbookCarousel->getId()]),
                'icon' => 'pencil',
            ];

            $actions['bespoke'] = [
                'label' => 'Bespoke',
                'translation_domain' => 'SonataAdminBundle',
                'template' => $this->getTemplateRegistry()->getTemplate('action_edit'),
                'url' => $this->generateUrl('edit', ['id' => $bespokeCarousel->getId()]),
                'icon' => 'pencil',
            ];
        }

        return $actions;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('General information')
                ->add('name')
            ->end()

            ->with('Images')
                ->add('images', 'multiple_file_upload', [
                    'allow_images' => true,
                ])
            ->end();
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('name');
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('name');
    }
}