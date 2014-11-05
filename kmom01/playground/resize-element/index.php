<?php
    $path = __DIR__;
    $title = 'Resize an element with JS';
    include($path . '/../template/header.php');
?>

<div id='flash'>
    <h1>Resize an element with JS</h1>
    <form id="size">
        <label>Width:
            <input id='width' type='number'>
        </label>
        <label>Height:
            <input id='height' type='number'>
        </label>
        <input id='resize' type='button' value='Resize'>
        <input id='reset' type='button' value='Reset'>

    </form>
</div>

<?php
    include ($path . '/../template/footer.php');
?>