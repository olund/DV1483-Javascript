<?php
    $path = __DIR__;
    $title = 'Template for test programs';
    include($path . '/../template/header.php');
?>

<div id='flash'>
    <form id="loginForm" methdo="POST">
        <p>
            <label for="username">Username: </label>
            <input id="username" name="username" type="text" required autofocus>
        </p>
        <button id="doLogin">Logga in</button>
        <button id="doLogout">Logout</button>
        <button id="status">Status</button>
    </form>

    <p>
        <output id="output"></output>
    </p>

</div>

<?php
    include ($path . '/../template/footer.php');
?>