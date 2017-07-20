<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);
//$app->add(new \Slim\Csrf\Guard);

$cors = function ($req, $res, $next) {
    $response = $next($req, $res);
    $host = $req->getAuthority();
    foreach (SITES as $val) {
        if (strstr($host, $val . '.codehuang')) {
            return $response
                ->withHeader('Access-Control-Allow-Origin', 'http://' . $host)
                ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        }
    }
    return $response;
};

$middlewares = ['cors' => $cors];
