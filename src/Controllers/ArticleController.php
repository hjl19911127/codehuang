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
        $data = Article::where('id', $args['id'])->first();
        return $response->withJson($data);
    }

    public function create(Request $request, Response $response, $args) {
        $data = $request->getParsedBody();
        $result = Article::insert($data);
        return $response->withJson($data);
    }
}
