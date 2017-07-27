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
        $body = $request->getParsedBody();
        $result = Menu::create($body);
        return $response->withJson($result, 201);
    }

    public function update(Request $request, Response $response, $args) {
        $body = $request->getParsedBody();
        $data = Menu::find($args['id'])->update($body);
        return $response->withJson($data);
    }

    public function remove(Request $request, Response $response, $args) {
        $data = Menu::find($args['id'])->delete();
        return $response->withJson($data);
    }

    public function batchRemove(Request $request, Response $response, $args) {
        $body = $request->getParsedBody();
        $body['ids'];
        $data = Menu::where('id', $args['id'])->delete();
        return $response->withJson($data);
    }
}
