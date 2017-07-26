<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\Controllers\BaseController as BaseController;
use App\Models\Menu;

class UserController extends BaseController {
    public function query(Request $request, Response $response, $args) {
        $filter = $request->getQueryParams();
        $query = Menu::query();
        $data = $query->get();
        return $response->withJson($data);
    }

    public function get(Request $request, Response $response, $args) {
        $data = Menu::where('id', $args['id'])->get();
        return $response->withJson($data);
    }

    public function create(Request $request, Response $response, $args) {
        $body = $request->getParsedBody();
        $result = Menu::insert($body);
        return $response->withJson($result, 201);
    }

    public function update(Request $request, Response $response, $args) {
        $body = $request->getParsedBody();
        $data = Menu::where('id', $args['id'])->update($body);
        return $response->withJson($body);
    }

    public function remove(Request $request, Response $response, $args) {
        $data = Menu::where('id', $args['id'])->delete();
        return $response->withJson($data);
    }

    public function batchRemove(Request $request, Response $response, $args) {
        $body = $request->getParsedBody();
        $body['ids'];
        $data = Menu::where('id', $args['id'])->delete();
        return $response->withJson($data);
    }
}
