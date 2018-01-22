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
        $data = SeekData::create(['uid' => 1, 'data' => json_encode($body)]);
        return $response->withJson($data);
    }
}
