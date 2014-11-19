<?php
    $path = __DIR__;
    $title = 'Template for test programs';
    include($path . '/../template/header.php');
?>

<h2>Uppgift 1</h2>
<div id='box1' class='box'>
    <img src='img/logo.png' style="width: 300px"alt='' />
    <h1>En vacker logo</h1>
    <p>Se vad roligt man kan ha när man kodar JS.</p>
</div>

<h2>Uppgift 2</h2>
<div id='box2' class='box'>
    <img src='img/logo.png' style="width: 300px"alt='' />
    <h1>En vacker logo</h1>
    <p>Se vad roligt man kan ha när man kodar JS.</p>
</div>

<h2>Uppgift 3</h2>
<div id='box3' class='box'>
    <button id="btn">Klicka på mig</button>
    <div>
        <p id='asdf'></p>
    </div>
</div>

<?php
    include ($path . '/../template/footer.php');
?>