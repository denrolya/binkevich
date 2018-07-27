<?php

namespace AppBundle\Controller;

use AppBundle\Entity\File;
use AppBundle\Entity\Order;
use AppBundle\Form\OrderType;
use AppBundle\Service\FileManager;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class OrderController extends Controller
{
    /**
     * @Route("/order/{id}/invoice.html", name="order_invoice_html")
     * @Method({"GET"})
     */
    public function invoiceHTMLAction(Order $order)
    {
        return $this->render('::invoice.html.twig', [
            'order' => $order
        ]);
    }

    /**
     * @Route("/order/{id}/invoice.pdf", name="order_invoice_pdf")
     * @Method({"GET"})
     */
    public function invoicePDFAction(Order $order, FileManager $fileManager)
    {
        $invoice = $fileManager->generateOrderInvoicePdfFromPath($order);

        return new Response($invoice['pdf'],
            Response::HTTP_OK, [
                'Content-Type'          => 'application/pdf',
                'Content-Disposition'   => 'attachment; filename="' . $invoice['filename'] . '"'
            ]
        );
    }

    /**
     * @Route("/order/{id}/order.zip", name="order_zip")
     * @Method({"GET"})
     */
    public function downloadOrderFilesAsZipAction(Order $order, FileManager $fileManager)
    {
        $zip = $fileManager->generateOrderInvoicesArchive($order);

        $response = new BinaryFileResponse($zip);
        $response->setContentDisposition(ResponseHeaderBag::DISPOSITION_ATTACHMENT);

        return $response;
    }
}
