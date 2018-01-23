<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\Controllers\BaseController as BaseController;
use App\Models\SeekData;
use DB;

class SeekController extends BaseController {
    public function get(Request $request, Response $response, $args) {
        $data = SeekData::where('id', $args['id'])->get();
        return $response->withJson($data);
    }

    public function uploadData(Request $request, Response $response, $args) {
        $body = $request->getParsedBody();
        function toSqlData($v) {
            return ['uid' => 1, 'data' => json_encode($v)];
        }

        var_dump(aa);
        DB::table('ch_seek_data')->insert(array_map('toSqlData', $body));
        return $response->withJson(['code' => 'success']);
    }
}
