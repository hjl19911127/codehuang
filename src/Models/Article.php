<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model {
    protected $table = 'article';
    protected $guarded = ['created_at', 'updated_at'];
    protected $casts = [
        'is_top' => 'boolean',
        'is_online' => 'boolean'
    ];
}
