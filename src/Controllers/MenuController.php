<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\Controllers\BaseController as BaseController;
use App\Models\Menu;

class MenuController extends BaseController {
    public function query(Request $request, Response $response, $args) {
        $filter = $request->getQueryParams();
        $query = Menu::query();
        if (isset($filter['no_root']) && $filter['no_root']) {
            $query->where('parent_id', '!=', 0);
        }
        if (isset($filter['is_enabled']) && $filter['is_enabled']) {
            $query->where('is_enabled', true);
        }
        $data = $query->get();
        return $response->withJson($data);
    }

    public function get(Request $request, Response $response, $args) {
        $data = Menu::where('id', $args['id'])->get();
        return $response->withJson($data);
    }

    public function create(Request $request, Response $response, $args) {
        $data = $request->getParsedBody();
        Article::insert($data);
        return $response->withJson($data);
    }

    public function remove(Request $request, Response $response, $args) {
        $data = $request->getParsedBody();
        $result = Article::insert($data);
        return $response->withJson($data);
    }
}
