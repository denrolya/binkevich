<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Order;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class OrderController extends Controller
{
    /**
     * @Route("/order/{id}/invoice.html", name="order_invoice_html")
     * @Method({"GET"})
     * @Template("::invoice.html.twig")
     */
    public function invoiceHTMLAction(Order $order)
    {
        return [
            'order' => $order
        ];
    }

    /**
     * @Route("/order/{id}/invoice.pdf", name="order_invoice_pdf")
     * @Method({"GET"})
     */
    public function invoicePDFAction(Order $order)
    {
        $pageUrl = $this->generateUrl('order_invoice_html', [
            'id' => $order->getId()
        ],UrlGeneratorInterface::ABSOLUTE_URL);

        $now = new \DateTime();
        $invoiceFilename = "invoice_" . $now->format('Y-m-d_H-i') . '.pdf';
        $invoicesDir = $this->container->getParameter('files_dir') . '/' . $order->getId() . '/invoices/';

        $pdf = $this->get('knp_snappy.pdf')->getOutput($pageUrl);

        $pdfFile = fopen($invoicesDir . $invoiceFilename, 'w+');
        fwrite($pdfFile, $pdf);
        fclose($pdfFile);

        return new Response($pdf,
            Response::HTTP_OK, [
                'Content-Type'          => 'application/pdf',
                'Content-Disposition'   => 'attachment; filename="' . $invoiceFilename . '"'
            ]
        );
    }

    /**
     * @Route("/order/{id}/order.zip", name="order_zip")
     * @Method({"GET"})
     */
    public function downloadOrderFilesAsZipAction(Order $order)
    {
        $zip = new \ZipArchive();
        $zipName = 'order-'.time().".zip";
        $zip->open($zipName,  \ZipArchive::CREATE);

        $finder = new Finder();
        $finder
            ->files()
            ->in($this->container->getParameter('files_dir') . '/' . $order->getId(). '/invoices');

        foreach ($finder as $file) {
            /** @var \Symfony\Component\Finder\SplFileInfo $file */
            if (strtolower($file->getExtension()) !== 'pdf') continue;
            $zip->addFromString($file->getFilename(), $file->getContents());
        }

        $zip->close();

        $response = new BinaryFileResponse("../web/".$zipName);
        $response->setContentDisposition(ResponseHeaderBag::DISPOSITION_ATTACHMENT);

        return $response;
    }

    /**
     * @Route("/order", name="order_save")
     * @Method({"POST"})
     */
    public function processOrderAction(Request $request)
    {
        $order = new Order();
        $form = $this->createForm(new OrderType(), $order);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');

            $em->persist($order);

            $em->flush();

            if ($file = $request->files->get('file')) {

                $filename = $order->getId() . '-' . md5(uniqid()) . '.' . $file->guessExtension();
                $orderDirAbsolutePath = $this->container->getParameter('files_dir') . '/' . $order->getId();
                $file->move($orderDirAbsolutePath, $filename);

                $newFile = (new File())
                    ->setName($filename)
                    ->setRelativePath('/uploads/orders/' . $order->getId() . '/' . $filename)
                    ->setAbsolutePath($orderDirAbsolutePath . '/' . $filename)
                    ->setSize($file->getClientSize());

                $order->setFile($newFile);

                $em->persist($newFile);

                $em->flush();
            }

            $this->addFlash('success', 'You have successfully placed an order on VisualMasters!');

            $message = \Swift_Message::newInstance()
                ->setSubject('[NEW] Order was successfully submitted!')
                ->setFrom('no-reply@visualmasters.co.uk')
                ->setTo($order->getEmail())
                ->setBody($order->getComments(), 'text/html');

            if (isset($newFile)) {
                $message->attach(\Swift_Attachment::fromPath($newFile->getAbsolutePath())->setFilename($newFile->getName()));
            }

            $failedRecipients = [];

            $this->get('mailer')->send($message, $failedRecipients);

            return new JsonResponse([
                'status' => 'ok'
            ], Response::HTTP_OK);
        }
    }
}