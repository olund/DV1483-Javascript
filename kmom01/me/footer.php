<?php
    $d = explode('/', trim(__DIR__, '/'));
    $srcUrl = '../source.php?dir=' . end($d) . '&amp;file=' . basename($_SERVER['PHP_SELF']) . '#file';
?>

<footer id="footer">
    <p>
        <em>
            Use the <a href='<?=$srcUrl?>'>force</a>
        </em>
    </p>

    <nav class="cyan">
        Playgrounds
        <ul>
            <?php
                foreach (read('../playground/', false) as $key => $value) {
                    echo "<li><a href='{$value}'>{$key}</a></li>";
                }
            ?>
        </ul>
    </nav>

    <nav class="cyan">
        Validatorer:
        <a href='http://validator.w3.org/check/referer'>HTML5</a>
        <a href='http://jigsaw.w3.org/css-validator/check/referer?profile=css3'>CSS3</a>
        <a href='http://validator.w3.org/unicorn/check?ucn_uri=referer&amp;ucn_task=conformance'>Unicorn</a>
        <a href='http://csslint.net/'>CSS-lint</a>
        <a href='http://jslint.com/'>JS-lint</a>
    </nav>

    <nav class="cyan">Verktyg:
        <a href='http://jsfiddle.net/user/olund/fiddles/'>Olund-fiddles</a>
        <a href='http://caniuse.com/'>Can-I-Use</a>
        <a href='<?=$srcUrl?>'>Source</a>
    </nav>

    <nav class="cyan">Manualer:
        <a href='https://developer.mozilla.org/en/JavaScript/Reference'>JS Core</a>
        <a href='https://developer.mozilla.org/en/Gecko_DOM_Reference'>JS DOM</a>
        <a href='https://developer.mozilla.org/en/DOM/DOM_event_reference'>JS DOM Events</a>
        <a href='http://api.jquery.com/'>jQuery</a>
        <a href='http://lesscss.org/'>LESS</a>
        <a href='https://developer.mozilla.org/'>Mozilla DN</a>
        <a href='http://developer.apple.com/library/safari/navigation/'>Apple DN</a>
    </nav>
</footer>

<script src="/~heoa13/js/jquery.js"></script>
<script src="js/main.js"></script>

</body>
</html>

