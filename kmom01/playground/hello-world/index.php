<?php
    $path = __DIR__;
    $title = 'Template for test programs';
    include($path . '/../template/header.php');
?>

<div id='flash'>
    <p id="text" class="red">
        Hi this text should be replaced when page and DOM is loaded
    </p>
    <p id='luckynumber' class='cyan'>No lucky number yet...</p>
</div>

<?php
    include ($path . '/../template/footer.php');
?>