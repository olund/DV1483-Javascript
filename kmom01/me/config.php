<?php
error_reporting(-1);

$title = "Javascript";

spl_autoload_register(function($class) {
    require preg_replace('{\\\\|_(?!.*\\\\)}',
        DIRECTORY_SEPARATOR, ltrim($class, '\\')).'.php';
});

function read($dir, $wantMarkdown = true)
{
    $ret = [];
    if (is_dir($dir)) {
        if ($dh = opendir($dir)) {
            while (($file = readdir($dh)) !== false) {
                if ($wantMarkdown) {
                    if (strpos($file, '.md')) {
                        $ret[str_replace('.md', '', $file)]
                            = "report.php?file={$file}";
                    }
                } else {
                    if (is_dir("{$dir}/{$file}")) {
                        if (! preg_match("/(template|(\.))/", $file))
                            $ret[$file] = "{$dir}{$file}";
                    }
                }
            }
            closedir($dh);
        }
    }
    return $ret;
}

function getFile ()
{
    if (isset($_GET['file']) && $_GET['file'] !== null) {
        $pattern = "[\\~#%&*{}/:<>?|\"-]";
        $file = strip_tags($_GET['file']);
        if (!preg_match($pattern, $file)) {
            return $file;
        }
    }
    return "";
}
