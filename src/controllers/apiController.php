<?php

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
    $this->group('/cards', function () {
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
    $this->group('/articles', function () {
        $this->get('', function ($req, $res, $args) {
            $filter = $req->getQueryParams();
            $data = $this->get('db')->table('article')->skip(($filter['page'] - 1) * $filter['size'])->take($filter['size'])->get();
            $count = $this->get('db')->table('article')->count();
            return $res->withJson(['items' => $data, 'count' => $count]);
        });
        $this->get('/{id:\d+}', function ($req, $res, $args, $db) {
            $db->where('title', 'like', '%foo%')->get();
            $data = ['id' => 1, 'title' => 'adsd'];
            return $res->withJson($data);
        });
        $this->post('', function ($req, $res, $args) {
            $data = $req->getParsedBody();
            $result = $this->get('db')->table('article')->insert($data);
            return $res->withJson($data);
        });
    });
    $this->group('/menus', function () {
        $this->get('', function ($req, $res, $args) {
            $filter = $req->getQueryParams();
            $table = $this->get('db')->table('menu');
            if (!isset($filter['with_root']) || !$filter['with_root']) {
                $table->where('parent_id', '!=', 0);
            }
            $data = $table->get();
            return $res->withJson($data);
        });
        $this->get('/{id:\d+}', function ($req, $res, $args) {
            $data = $this->get('db')->table('menu')->where('id', $args['id'])->get();
            return $res->withJson($data);
        });
        $this->post('', function ($req, $res, $args) {
            $body = $req->getParsedBody();
            $result = $this->get('db')->table('menu')->insert($body);
            return $res->withJson($result, 201);
        });
        $this->put('/{id:\d+}', function ($req, $res, $args) {
            $body = $req->getParsedBody();
            $data = $this->get('db')->table('menu')->where('id', $args['id'])->update($body);
            return $res->withJson($data);
        });
        $this->delete('/{id:\d+}', function ($req, $res, $args) {
            $data = $this->get('db')->table('menu')->where('id', $args['id'])->delete();
            return $res->withJson($data);
        });
        $this->post('/deletion', function ($req, $res, $args) {
            $body = $req->getParsedBody();
            $body['ids'];
            $data = $this->get('db')->table('menu')->where('id', $args['id'])->delete();
            return $res->withJson($data);
        });
    });
})->add($middlewares['cors']);

