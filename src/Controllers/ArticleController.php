<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\Controllers\BaseController as BaseController;
use App\Models\Article;

class ArticleController extends BaseController {

    public function query(Request $request, Response $response, $args) {
        $filter = $request->getQueryParams();
        $data = Article::skip(($filter['page'] - 1) * $filter['size'])->take($filter['size'])->get();
        $count = Article::count();
        return $response->withJson(['items' => $data, 'count' => $count]);
    }

    public function get(Request $request, Response $response, $args) {
        $data = Article::find($args['id']);
        return $response->withJson($data);
    }

    public function create(Request $request, Response $response, $args) {
        $body = $request->getParsedBody();
        $data = Article::create($body);
        return $response->withJson($data, 201);
    }

    public function update(Request $request, Response $response, $args) {
        $body = $request->getParsedBody();
        $data = Article::find($args['id']);
        $data->title = $body['title'];
        $data->content = $body['content'];
        $data->is_online = $body['is_online'];
        $data->is_top = $body['is_top'];
        $data->save();
        return $response->withJson($data, 201);
    }
}
