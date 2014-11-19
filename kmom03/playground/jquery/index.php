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
    <form>
        <label>Colorcode in hex (#eee or #5c5c5c): <input id='box3_color' type='text' name='color' /></label>
        <input id='box3_add' type='button' value='Add color' />
    </form>
    <p id='palette'>Color Palette:</p>
</div>

<?php
    include ($path . '/../template/footer.php');
?>