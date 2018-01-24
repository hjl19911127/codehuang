<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\Controllers\BaseController as BaseController;
use App\Models\SeekData;

class SeekController extends BaseController {
    public function get(Request $request, Response $response, $args) {
        $data = SeekData::where('id', $args['id'])->get();
        return $response->withJson($data);
    }

    public function uploadData(Request $request, Response $response, $args) {
        $body = $request->getParsedBody();
        $toSqlData = function ($v) {
            return ['uid' => 1, 'data' => json_encode($v)];
        };
        SeekData::insertAll(array_map($toSqlData, $body));
        return $response->withJson(['code' => 'success']);
    }
}
