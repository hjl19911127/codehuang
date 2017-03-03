<?php

$app->get('/v1/api/xn/item', function ($req, $res, $args) {
    $query = $req->getQueryParams();
    if (!array_key_exists('itemid', $query)) {
        return $res->withStatus(404)->write('Page not Found');
    }
    $item = [
        'item' => [
            "id" => $query['itemid'],
            "name" => "公务员多省联考强化班",
            "imageurl" => "http://c24.tianyuimg.com/s/p/4/c221e7ad6cb141b0ac5521e45a990aa9.jpg",
            "url" => "http://ke.91up.com/course/" . $query['itemid'],
            "siteprice" => "¥69.0-521.0",
            "marketprice" => "¥68.0-333.0",
            "category" => "公务员考试",
            "brand" => "91up"
        ]
    ];
    $res->withJson($item);
});

$app->get('/api/token', function ($req, $res, $args) {
    $name = $req->getAttribute('csrf_name');
    $value = $req->getAttribute('csrf_value');
    return $res->withJson(['csrf_name' => $name, 'csrf_value' => $value]);
});

$app->get('/api/session', function ($req, $res, $args) {
    return $res->withJson($_SESSION);
});

$app->group('/api/cards', function () {
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

$app->group('/api/articles', function () {
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

