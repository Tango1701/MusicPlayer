<?php
    define('basepath', $_SERVER['DOCUMENT_ROOT']);

    require_once basepath."/MULTIMIDIA/Controller/controller.php";

    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    
    if ($uri =='/MULTIMIDIA/index.php') 
    {
        header("location: /MULTIMIDIA/View/welcome.html");
    }
    else {
        header('Status: 404 Not Found');
        echo '<html><body><h1>Página não encontrada!</h1></body></html>';
    }

?>