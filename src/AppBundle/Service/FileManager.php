<?php
/**
 * Created by PhpStorm.
 * User: drolya
 * Date: 08.06.18
 * Time: 10:27
 */

namespace AppBundle\Service;

use AppBundle\Entity\Order;
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

    // TODO: Inject parameter
    public function __construct($filesDir, Pdf $pdfService, Router $router)
    {
        $this->filesDirectory = $filesDir;
        $this->pdfService = $pdfService;
        $this->router = $router;
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
        // TODO
        $pageUrl = $this->router->generateUrl($route, $routeParams, UrlGeneratorInterface::ABSOLUTE_URL);

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