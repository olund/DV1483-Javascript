<?php
session_name(preg_replace('/[^a-z\d]/i', '', __DIR__));
session_start();

$do = isset($_GET['do']) ? $_GET['do'] : null;

if ($do === 'login') {
    if ($_SESSION['user'] === 'Guest') {
        if (in_array($_POST['username'], ['admin', 'olund', 'doe'])) {
            $_SESSION['user'] = $_POST['username'];
            $output = 'Successfully logged in as user: ' . $_SESSION['user'];
        } else {
            $output = 'Failed login, login as admin, olund or doe';
        }
    } else {
        $output = 'You are already logged in dude.';
    }


} else if ($do === 'logout') {
    // TODO KOLLA SÅ ATT HAN ÄR INLOGGAD FÖRST:
    // if ($_SESSION[''])

    $_SESSION['user'] = 'Guest';
    $output = 'Session destroyed, you logged out';
} else if ($do === 'status') {

    if ($_SESSION !== 'Guest') {
        $output = 'You are logged in as: ' . $_SESSION['user'];
    } else {
        $output = 'You are a guest';
    }
} else {
    $_SESSION['user'] = 'Guest';
}

header('Content-type: application/json');
echo json_encode(["output" => $output]);