<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);
//$app->add(new \Slim\Csrf\Guard);

$cors = function ($req, $res, $next) {
    $response = $next($req, $res);
    $origin = $req->getHeader('Origin');
    if (strstr($origin[0], '.codehuang')) {
        $acceptHeaders = [
            'Accept',
            'Accept-Encoding',
            'Accept-Language',
            'Access-Control-Request-Headers',
            'Access-Control-Request-Method',
            'Cache-control',
            'Connection',
            'DNT',
            'Host',
            'Origin',
            'Pragma',
            'Referer',
            'User-Agent',
            'X-Requested-With',
            'Content-Type',
            'Authorization',
        ];
        return $response
            ->withHeader('Access-Control-Allow-Origin', $origin)
            ->withHeader('Access-Control-Allow-Headers', join(',', $acceptHeaders))
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, DELETE, TRACE, PATCH')
            ->withHeader('Access-Control-Allow-Credentials', 'true');
    }
    return $response;
};

$middlewares = ['cors' => $cors];
