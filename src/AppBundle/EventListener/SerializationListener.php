<?php
namespace AppBundle\EventListener;

use Application\Sonata\MediaBundle\Entity\Media;
use JMS\Serializer\EventDispatcher\EventSubscriberInterface;
use JMS\Serializer\EventDispatcher\ObjectEvent;

/**
 * Add data after serialization
 */
class SerializationListener implements EventSubscriberInterface
{

    /**
     * @inheritdoc
     */
    static public function getSubscribedEvents()
    {
        return [[
            'event' => 'serializer.post_serialize',
            'class' => Media::class,
            'method' => 'onPostSerialize'
        ]];
    }

    public function onPostSerialize(ObjectEvent $event)
    {
        global $kernel;
        $imageProvider = $kernel->getContainer()->get('sonata.media.provider.image');

        $event
            ->getVisitor()
            ->addData('src', $imageProvider->generatePublicUrl($event->getObject(), 'reference'));
    }
}