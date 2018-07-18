<?php

namespace AppBundle\Service;

use AppBundle\Entity\File;
use AppBundle\Entity\Order;
use AppBundle\Util\ParametersManager;
use Doctrine\ORM\EntityManager;
use Knp\Snappy\Pdf;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class FileManager
{
    /** @var string */
    private $filesDirectory;

    /** @var Pdf  */
    private $pdfService;

    /** @var Router  */
    private $router;

    /** @var EntityManager  */
    private $em;

    public function __construct(Pdf $pdfService, Router $router, EntityManager $em)
    {
        $this->filesDirectory = ParametersManager::getParameter(Order::ORDER_FILES_DIRECTORY_PARAMETER);
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

        // TODO: Put timestamp instead of datetime formatting
        $invoicesDir = "{$this->filesDirectory}/{$order->getId()}/invoices/";
        $filename = str_replace(Order::TIMESTAMP_PLACEHOLDER,
            time(),
            Order::INVOICE_FILENAME_PATTERN
        );

        $this->writePdfToFile($invoicesDir . $filename, $pdf);

        return [
            'pdf' => $pdf,
            'filename' => $filename
        ];
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