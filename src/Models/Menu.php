<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model {
    protected $table = 'menu';
    protected $guarded = ['created_at', 'updated_at'];
    protected $casts = [
        'is_enabled' => 'boolean',
    ];
}
