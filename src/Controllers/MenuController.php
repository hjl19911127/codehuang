<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\Controllers\BaseController as BaseController;
use \App\Models\Menu;

class MenuController extends BaseController {
    public function all(Request $request, Response $response, $args) {
        $filter = $request->getQueryParams();
        $table = $this->get('db')->table('menu');
        if (!isset($filter['with_root']) || !$filter['with_root']) {
            $table->where('parent_id', '!=', 0);
        }
        $data = $table->get();
        return $response->withJson($data);
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
