<?php

$sites = ['front', 'system', 'chat', 'share', 'webgradient'];
/**
 * multiple sites
 */
$app->get('/{site:(?:' . join('|', $sites) . ')}{path:.*}', function ($req, $res, $args) {
    setcookie('site', $args['site'], time() + 315360000, '/');
    return $this->renderer->render($res, '/sites/' . $args['site'] . '.html', $args);
});

/**
 * index
 */
$app->get('/', function ($req, $res, $args) {
    $args['env'] = $this->get('settings')['env'];
    $site = $req->getCookieParam('site');
    if ($site) {
//        return $res->withRedirect('/' . $site);
        return $this->renderer->render($res, '/sites/' . $site . '.html', $args);
    } else {
        // return $this->renderer->render($res, '/home/index.html', $args);
        return $res->withRedirect('/webgradient');
    }
});

$app->get('/excel', function ($req, $res, $args) {
    return $this->renderer->render($res, '/excel.html', $args);
});
$app->get('/icplayer', function ($req, $res, $args) {
    return $this->renderer->render($res, '/views/icplayer/index.html', $args);
});
$app->get('/love', function ($req, $res, $args) {
    echo('老婆我爱你');
});
