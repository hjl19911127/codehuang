<?php
$app->get('/api/v1/token', function ($req, $res, $args) {
    $name = $req->getAttribute('csrf_name');
    $value = $req->getAttribute('csrf_value');
    return $res->withJson(['csrf_name' => $name, 'csrf_value' => $value]);
});

$app->get('/api/v1/session', function ($req, $res, $args) {
    return $res->withJson($_SESSION);
});
$app->group('/api/v1/users', function () {
    $this->get('', function ($req, $res, $args) {
        $filter = $req->getQueryParams();
        $data = $this->get('db')->table('user')->skip($filter['page'] * $filter['size'])->take($filter['size'])->get();
        $count = $this->get('db')->table('user')->count();
        return $res->withJson(['items' => $data, 'count' => $count]);
    });
    $this->post('', function ($req, $res, $args) {
        $data = $req->getParsedBody();
        $result = $this->get('db')->table('gradient')->insert($data);
        return $res->withJson($data);
    });
    $this->post('/actions/login', function ($req, $res, $args) {
        $data = $req->getParsedBody();
        $result = $this->get('db')->table('gradient')->insert($data);
        return $res->withJson($data);
    });
});


$app->group('/api/v1/cards', function () {
    $this->post('', function ($req, $res, $args) {
        $data = $req->getParsedBody();
        $result = $this->get('db')->table('gradient')->insert($data);
        return $res->withJson($data);
    });
    $this->get('', function ($req, $res, $args) {
        $filter = $req->getQueryParams();
        $data = $this->get('db')->table('gradient')->skip($filter['page'] * $filter['size'])->take($filter['size'])->get();
        $count = $this->get('db')->table('gradient')->count();
        return $res->withJson(['items' => $data, 'count' => $count]);
    });
    $this->get('/{id:\d+}', function ($req, $res, $args, $db) {
        $db->where('title', 'like', '%foo%')->get();
        $data = ['id' => 1, 'title' => 'adsd'];
        return $res->withJson($data);
    });
});

$app->group('/api/v1/articles', function () {
    $this->post('', function ($req, $res, $args) {
        $data = $req->getParsedBody();
        $result = $this->get('db')->table('article')->insert($data);
        return $res->withJson($data);
    });
    $this->get('', function ($req, $res, $args) {
        $filter = $req->getQueryParams();
        $data = $this->get('db')->table('article')->skip($filter['page'] * $filter['size'])->take($filter['size'])->get();
        $count = $this->get('db')->table('article')->count();
        return $res->withJson(['items' => $data, 'count' => $count]);
    });
    $this->get('/{id:\d+}', function ($req, $res, $args, $db) {
        $db->where('title', 'like', '%foo%')->get();
        $data = ['id' => 1, 'title' => 'adsd'];
        return $res->withJson($data);
    });
});

