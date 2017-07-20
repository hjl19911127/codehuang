<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);
//$app->add(new \Slim\Csrf\Guard);

$cors = function ($req, $res, $next) {
    $response = $next($req, $res);
    $origin = $req->getHeader('Origin');

    foreach (SITES as $val) {
        if (strstr($origin[0], $val . '.codehuang')) {
            return $response
                ->withHeader('Access-Control-Allow-Origin', $origin)
                ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        }
    }
    return $response;
};

$middlewares = ['cors' => $cors];
