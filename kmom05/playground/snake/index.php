<?php
    $path = __DIR__;
    $title = 'Snake the game';
    include($path . '/../template/header.php');
?>

<div id='flash'>
    <h1>Snake</h1>

<!--
    <audio id="audio1">
        <source src="sound/TopGear1.ogg" type="audio/ogg"/>
        <source src="sound/TopGear1.mp3" type="audio/mp3"/>
        Your browser does not support the audio tag.
    </audio>
-->
    <div id="score">Score: 0</div> <div id="life">Life: 3</div>

    <canvas id='canvas' width="900" height="500">
      Your browser does not support the element HTML5 Canvas.
    </canvas>

</div>

<?php
    include ($path . '/../template/footer.php');
?>