<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeekData extends Model {
    protected $table = 'seek_data';
    protected $guarded = ['created_at', 'updated_at'];
//    protected $casts = [
//        'is_enabled' => 'boolean',
//    ];
}
