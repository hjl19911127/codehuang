<?php
return [
    'settings' => [
        'env' => 'production',
        'determineRouteBeforeAppMiddleware' => false,
        'displayErrorDetails' => true, // set to false in production

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../views',
//            'cache' => __DIR__ . '/../cache/',
            'auto_reload' => true
        ],

        // Monolog settings
        'logger' => [
            'name' => 'codehuang',
            'path' => __DIR__ . '/../logs/app.log',
        ],

        //db
        'db' => [
            'driver' => 'mysql',
            'host' => 'localhost',
            'database' => 'codehuang',
            'username' => 'root',
            'password' => 'test',
            'charset' => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix' => 'ch_',
        ]
    ],
];
