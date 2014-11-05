<?php
    $path = __DIR__;
    $title = 'Template for test programs';
    include($path . '/../template/header.php');
?>

<div id='flash'>
    <p>
        Hi, I'm a cowboy, click to move me or just move me with the keys arrows, space, h, b, f, r. GLHF!
    </p>
    <div id="b1" class="baddie down"></div>
</div>

<?php
    include ($path . '/../template/footer.php');
?>