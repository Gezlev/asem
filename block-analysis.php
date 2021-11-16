<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once 'vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('templates/');
$twig = new \Twig\Environment($loader);

echo $twig->render('pages/block-analysis.html', [
    'title' => 'Аналіз блока | ASEM',
    'page' => 'blocks'
]);

?>


