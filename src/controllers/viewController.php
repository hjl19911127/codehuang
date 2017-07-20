<?php

/**
 * multiple sites
 */
$app->get('/{site:(?:' . join('|', SITES) . ')}{path:.*}', function ($req, $res, $args) {
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
        foreach (SITES as $value) {
            $args['sites'][$value] = '//' . $value . '.' . $this->get('settings')['domain'][$this->get('settings')['env']];
        }
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
