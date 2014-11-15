<?php
include 'config.php';

use \Michelf\Markdown;

$file = getFile();
$title = 'Reports';

if ($file != "") {
    if ((@$text = file_get_contents('reports/' . $file)) !== false) {
        $html = Markdown::defaultTransform($text);
        $title = ucfirst(explode('.', $file)[0]) . " - Redovisning";
    }
}

include 'header.php';
?>
    <section class="wrapper">
        <header>
            <h1>Reports</h1>
        </header>

        <nav class="left">
            <ul class="report">
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
            </ul>
        </nav>

        <article class="report card markdown-body">
            <?php echo isset($html) ? $html: 'Välj redovisning till vänster';?>
        </article>
        <div class="clearFix"></div>
    </section>
</main>
<?include 'footer.php';?>
