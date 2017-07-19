<?php

$sites = ['front', 'admin', 'chat', 'share', 'webgradient', 'greensock', 'blog'];
/**
 * multiple sites
 */
$app->get('/{site:(?:' . join('|', $sites) . ')}{path:.*}', function ($req, $res, $args) {
    return $this->renderer->render($res, '/sites/' . $args['site'] . '.html', $args);
});

/**
 * index
 */
$app->get('/{path:.*}', function ($req, $res, $args) {
    $args['site'] = $req->getQueryParam('site');
    if ($args['site']) {
        return $this->renderer->render($res, '/sites/' . $args['site'] . '.html', $args);
    } else {
        return $this->renderer->render($res, '/home/index.html', $args);
    }
});

//$app->get('/excel', function ($req, $res, $args) {
//    return $this->renderer->render($res, '/excel.html', $args);
//});
//$app->get('/icplayer', function ($req, $res, $args) {
//    return $this->renderer->render($res, '/views/icplayer/index.html', $args);
//});
//$app->get('/love', function ($req, $res, $args) {
//    echo('老婆我爱你');
//});
