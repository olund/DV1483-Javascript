<?php
include 'config.php';

use \Michelf\Markdown;
$html = '<p>Failed to load file</p>';

$file = getFile();
$title = 'Reports';

if ($file != "" ) {
    if ((@$text = file_get_contents('reports/' . $file)) !== false) {
        $html = Markdown::defaultTransform($text);
        $title = ucfirst(explode('.', $file)[0]) . " - Redovisning";
    }
}

include 'header.php';
?>
    </nav>
    <section class="wrapper">
        <header>
            <h1>Reports</h1>
        </header>

        <nav>
            <?php
                foreach (read('reports/') as $key => $value) {
                    echo "<li>";
                    if (getFile() != "" && $key == str_replace('.md', '', getFile())):
                        echo "<a class='selected' href='{$value}'>{$key}</a>";
                    else:
                        echo "<a href='{$value}'>{$key}</a>";
                    endif;
                    echo "</li>";
                }
            ?>
        </nav>

        <article class="report card">
            <? echo $html;?>
        </article>
    </section>
</main>
<?include 'footer.php';?>
