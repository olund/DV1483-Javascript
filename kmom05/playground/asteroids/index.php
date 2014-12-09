<?php
    $path = __DIR__;
    $title = 'Asteroids';
    include($path . '/../template/header.php');
?>

<div id='flash'>
    <h1>Asteroids</h1>

    <canvas id='canvas1' width='900' height='400'>
      Your browser does not support the element HTML5 Canvas.
    </canvas>

</div>

<?php
    include ($path . '/../template/footer.php');
?>