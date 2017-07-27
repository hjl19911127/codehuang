<?php
if (PHP_SAPI == 'cli-server') {
    // To help the built-in PHP dev server, check if the request was actually for
    // something which should probably be served as a static file
    $file = __DIR__ . $_SERVER['REQUEST_URI'];
    if (is_file($file)) {
        return false;
    }
}
date_default_timezone_set('Asia/Shanghai');
//路径分隔符
define('DIRECTORY_SEPARATOR', '/', true);
//站点根目录
define('SITE_ROOT', __DIR__, true);
//主机协议
define('SITE_PROTOCOL', isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443' ? 'https://' : 'http://', true);
//当前访问的主机名
define('SITE_HOST', (isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : ''), true);
//系统开始时间
define('SYS_START_TIME', microtime(), true);
//系统开始时间
define('SITES', ['front', 'admin', 'chat', 'share', 'webgradient', 'greensock', 'blog'], true);

require __DIR__ . '/../vendor/autoload.php';

session_start();

// Instantiate the app
$settings = require __DIR__ . '/../src/settings.php';
$app = new \Slim\App($settings);

// Set up dependencies
require __DIR__ . '/../src/dependencies.php';

// Register middleware
require __DIR__ . '/../src/middleware.php';

// Register routes
require __DIR__ . '/../src/routers.php';

// Run app
$app->run();
