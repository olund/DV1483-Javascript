<?php
    $path = __DIR__;
    $title = 'Template for test programs';
    include($path . '/../template/header.php');
?>

<div id='flash'>
    <h1>Quotes with AJAX!</h1>
    <h2 id="quote" class="cyan"></h2>
    <button style="margin-bottom: 20px;" id="refresh">Refresh the quotes with Ajax!</button>
</div>

<?php
    include ($path . '/../template/footer.php');
?>