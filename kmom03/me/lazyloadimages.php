<?php
    include 'config.php';
    $path = __DIR__;
    $title = 'Lazy load images';
    include 'header.php';
    use \Michelf\MarkdownExtra;

?>
    <section class="wrapper lazyload">
        <article>
            <header>
                <h1>Lazyload images<small>.js</small></h1>
                <p>A very very lightweight plugin to lazy load images for jQuery</p>
            </header>

            <div class="card">
                <div class="markdown-body">
                    <?php
                        $html = file_get_contents('reports/lazyload/README.md');
                        $html = MarkdownExtra::defaultTransform($html);
                        echo $html;
                    ?>
                </div>


                <h2>Demo</h2>
                <p>Scroll down to see it working</p>

                <ul>
                    <li><img data-src="http://lorempixel.com/g/800/500/sports/1" src="img/loader.gif" /></li>
                    <li><img data-src="http://lorempixel.com/g/800/500/sports/2" src="img/loader.gif" /></li>
                    <li><img data-src="http://lorempixel.com/g/800/500/sports/3" src="img/loader.gif" /></li>
                    <li><img data-src="http://lorempixel.com/g/800/500/sports/4" src="img/loader.gif" /></li>
                    <li><img data-src="http://lorempixel.com/g/800/500/sports/5" src="img/loader.gif" /></li>
                    <li><img data-src="http://lorempixel.com/g/800/500/sports/6" src="img/loader.gif" /></li>
                    <li><img data-src="http://lorempixel.com/g/800/500/sports/7" src="img/loader.gif" /></li>
                    <li><img data-src="http://lorempixel.com/g/800/500/sports/8" src="img/loader.gif" /></li>
                    <li><img data-src="http://lorempixel.com/g/800/500/sports/9" src="img/loader.gif" /></li>
                    <li><img data-src="http://lorempixel.com/g/800/500/sports/10" src="img/loader.gif" /></li>
                    <li><img data-src="img/1.jpg" src="img/loader.gif" style="width: 500px;" /></li>
                    <li><img data-src="img/2.jpg" src="img/loader.gif" style="width: 500px;" /></li>

                </ul>

                <footer>
                    <span>// Olund</span>
                </footer>
            </div>

        </article>
    </section>
</main>


<?php include "footer.php" ?>
