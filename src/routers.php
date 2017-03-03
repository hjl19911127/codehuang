<?php
// Routes
$dir = __DIR__ . '/controllers';
function router($app, $dir) {
    if (is_dir($dir)) {
        if ($dh = opendir($dir)) {
            while (($file = readdir($dh)) !== false) {
                if (!in_array($file, ['.', '..'], true)) {
                    if (filetype($dir . DIRECTORY_SEPARATOR . $file) === 'dir') {
                        router($app, $dir . DIRECTORY_SEPARATOR . $file);
                    } else {
                        include $dir . DIRECTORY_SEPARATOR . $file;
                    }

                }
            }
            closedir($dh);
        }
    }
}

router($app, $dir);
