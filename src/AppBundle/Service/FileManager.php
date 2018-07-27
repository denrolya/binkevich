<?php

namespace AppBundle\Service;

use AppBundle\Entity\File;
use AppBundle\Entity\Order;
use AppBundle\Util\ParametersManager;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Snappy\Pdf;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class FileManager
{
    /** @var string */
    private $orderFilesDirectory;

    /** @var Pdf  */
    private $pdfService;

    /** @var Router  */
    private $router;

    /** @var EntityManagerInterface  */
    private $em;

    public function __construct($orderFilesDirectory, Pdf $pdfService, Router $router, EntityManagerInterface $em)
    {
        $this->orderFilesDirectory = $orderFilesDirectory;
        $this->pdfService = $pdfService;
        $this->router = $router;
        $this->em = $em;
    }

    /**
     * @param Order $order
     * @return array
     */
    public function generateOrderInvoicePdfFromPath(Order $order)
    {
        $pdf = $this->generatePdfFromRoute('order_invoice_html', [
            'id' => $order->getId()
        ]);

        $invoicesDir = "{$this->orderFilesDirectory}/{$order->getId()}/invoices/";
        $filename = str_replace(Order::TIMESTAMP_PLACEHOLDER,
            time(),
            Order::INVOICE_FILENAME_PATTERN
        );

        $fs = new Filesystem();
        if (!$fs->exists($invoicesDir)) {
            $fs->mkdir($invoicesDir);
        }

        $this->writePdfToFile($invoicesDir . $filename, $pdf);

        return [
            'pdf' => $pdf,
            'filename' => $filename
        ];
    }

    /**
     * @param Order $order
     * @return string
     */
    public function generateOrderInvoicesArchive(Order $order)
    {
        $invoicesDir = "{$this->orderFilesDirectory}/{$order->getId()}/invoices/";
        $zip = new \ZipArchive();
        $zipName = 'order-' . time() . '.zip';
        $zip->open($invoicesDir . '/' . $zipName,  \ZipArchive::CREATE);

        $finder = new Finder();
        $finder->files()->in($invoicesDir);

        foreach ($finder as $file) {
            /** @var \Symfony\Component\Finder\SplFileInfo $file */
            if (strtolower($file->getExtension()) !== 'pdf') continue;
            $zip->addFromString($file->getFilename(), $file->getContents());
        }

        $zip->close();

        return $invoicesDir . '/' . $zipName;
    }

    /**
     * @param string $route
     * @param array $routeParams
     * @return string
     */
    public function generatePdfFromRoute($route, $routeParams = [])
    {
        $pageUrl = $this->router->generate($route, $routeParams, UrlGeneratorInterface::ABSOLUTE_URL);

        return $this->pdfService->getOutput($pageUrl);
    }

    /**
     * @param string $outputPath
     * @param string $pdf
     */
    private function writePdfToFile($outputPath, $pdf)
    {
        $pdfFile = fopen($outputPath, 'w+');
        fwrite($pdfFile, $pdf);
        fclose($pdfFile);
    }
}