<?php
include 'config.php';

use \Michelf\Markdown;
$html = '<p>Failed to load file</p>';
$file = getFile();

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
        <article class="report">
            <? echo $html;?>
        </article>
        <hr>
        <h2>Lekplats-länkar</h2>
        <ul>
            <li><a href="#">Länk1</a></li>
            <li><a href="#">Länk2</a></li>
            <li><a href="#">Länk3</a></li>
            <li><a href="#">Länk4</a></li>
            <li><a href="#">Länk5</a></li>
        </ul>
    </section>
</main>
<?include 'footer.php';?>
