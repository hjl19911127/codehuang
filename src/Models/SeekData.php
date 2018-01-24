<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeekData extends Model {
    protected $table = 'seek_data';
    protected $guarded = ['created_at', 'updated_at'];

    public static function insertAll(array $items) {
        $now = \Carbon\Carbon::now();
        $items = collect($items)->map(function (array $data) use ($now) {
            return array_merge([
                'created_at' => $now,
                'updated_at' => $now,
            ], $data);
        })->all();

        return self::insert($items);
    }
}
