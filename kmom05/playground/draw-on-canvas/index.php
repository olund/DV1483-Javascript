<?php
    $path = __DIR__;
    $title = 'Template for test programs';
    include($path . '/../template/header.php');
?>

<div id='flash'>
    <h1>Canvas</h1>
    <canvas id="canvas1" width="900" height="400">
        U cant use canvas..
    </canvas>
</div>

<?php
    include ($path . '/../template/footer.php');
?>