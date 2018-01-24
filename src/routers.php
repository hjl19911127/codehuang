<?php

$app->get('/ellipsis', function ($req, $res, $args) {
    return $this->renderer->render($res, '/test/ellipsis.html', $args);
});
$app->get('/machine-learning', function ($req, $res, $args) {
    return $this->renderer->render($res, '/test/machine-learning.html', $args);
});

$app->get('/propose', function ($req, $res, $args) {
    $svgPath = SITE_ROOT . '/static/propose/svg';
    $svg = [];
    if (is_dir($svgPath)) {
        if ($dh = opendir($svgPath)) {
            while (($file = readdir($dh)) !== false) {
                if (!in_array($file, ['.', '..'], true)) {
                    array_push($svg, basename($file, '.svg'));
                }
            }
            closedir($dh);
        }
    }
    sort($svg, 1);
    $args['svg'] = $svg;
    return $this->renderer->render($res, '/propose/index.html', $args);
});

$app->group('/v1', function () {
    $this->options('/{routes:.+}', function ($req, $res, $args) {
        return $res;
    });
    $this->get('/token', function ($req, $res, $args) {
        $name = $req->getAttribute('csrf_name');
        $value = $req->getAttribute('csrf_value');
        return $res->withJson(['csrf_name' => $name, 'csrf_value' => $value]);
    });
    $this->get('/session', function ($req, $res, $args) {
        return $res->withJson($_SESSION);
    });
    $this->group('/users', function () {
        $this->get('', function ($req, $res, $args) {
            $filter = $req->getQueryParams();
            $data = $this->get('db')->table('user')->skip(($filter['page'] - 1) * $filter['size'])->take($filter['size'])->get();
            $count = $this->get('db')->table('user')->count();
            return $res->withJson(['items' => $data, 'count' => $count]);
        });
        $this->post('', function ($req, $res, $args) {
            $data = $req->getParsedBody();
            $result = $this->get('db')->table('user')->insert($data);
            return $res->withJson($data);
        });
        $this->post('/actions/login', function ($req, $res, $args) {
            $data = $req->getParsedBody();
            $result = $this->get('db')->table('user')->where()->insert($data);
            return $res->withJson($result);
        });
    });
    $this->group('/gradients', function () {
        $this->get('', function ($req, $res, $args) {
            $filter = $req->getQueryParams();
            $data = $this->get('db')->table('gradient')->skip($filter['page'] * $filter['size'])->take($filter['size'])->get();
            $count = $this->get('db')->table('gradient')->count();
            return $res->withJson(['items' => $data, 'count' => $count]);
        });
    });
    $this->group('/articles', function () {
        $this->get('', App\Controllers\ArticleController::class . ':query');
        $this->get('/{id:\d+}', App\Controllers\ArticleController::class . ':get');
        $this->post('', App\Controllers\ArticleController::class . ':create');
        $this->put('/{id:\d+}', App\Controllers\ArticleController::class . ':update');
    });
    $this->group('/menus', function () {
        $this->get('', App\Controllers\MenuController::class . ':query');
        $this->get('/{id:\d+}', App\Controllers\MenuController::class . ':get');
        $this->post('', App\Controllers\MenuController::class . ':create');
        $this->put('/{id:\d+}', App\Controllers\MenuController::class . ':update');
        $this->delete('/{id:\d+}', App\Controllers\MenuController::class . ':remove');
        $this->post('/deletions', App\Controllers\MenuController::class . ':batchRemove');
    });
    $this->group('/seek', function () {
        $this->post('/data', App\Controllers\SeekController::class . ':uploadData');
    });
})->add($middlewares['cors']);

/**
 * index
 */
$app->get('/{path:[^v]?[\w\-\/]*}', function ($req, $res, $args) {
    $args['site'] = $req->getQueryParam('site');
    if ($args['site']) {
        return $this->renderer->render($res, '/sites/' . $args['site'] . '.html', $args);
    } else {
        foreach (unserialize(SITES) as $value) {
            $args['sites'][$value] = '//' . $value . '.' . $this->get('settings')['domain'][$this->get('settings')['env']];
        }
        return $this->renderer->render($res, '/home/index.html', $args);
    }
});