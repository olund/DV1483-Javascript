<?php
// Start session, shopping cart is stored in session
error_reporting(-1);

// Get the action that controlls what will happen
$action = empty($_GET['action']) ? null : $_GET['action'];

if($action == 'sum') {
    session_name('olund-shoppingcart');
    session_start();
    echo json_encode( ( isset($_SESSION['cart']) ? $_SESSION['cart'] : array('sum'=>0) ) );
    exit;
}
else if($action == 'pay') {
    session_name('olund-shoppingcart');
    session_start();
    include('cc_form.php');

    // Fix that submit button is not included in form submit from javaScript
    $_POST['doPay'] = true;
    $status = $form->Check();

    $output = 'The form was not submitted';
    $outputClass = 'error';
    $error = null;
    $payment = 0;

    if ($status === true) {
        $payment = $form['payment']['value'];
        $output = "The payment transaction was successful. A total of " . $_SESSION['cart']['sum'] . ' was withdrawn from your account dude.';
        $outputClass = 'success';

    }
    else if ($status === false) {
        $output = "The form contains invalid values. Correct them and try again.";
        $error = $form->GetValidationErrors();
    }

    // HÄR BUGGAR DET:..
    sleep(1);
    if(isset($_SESSION['cart'])) {
        //$_SESSION['cart']['sum'] = round(($_SESSION['cart']['sum'] - $payment) * 1.23, 2);
        $sum = $_SESSION['cart']['sum'];
    } else {
        $sum = 0;
    }

    //echo json_encode(array('status' => $status, 'output' => $output, 'outputClass' => $outputClass, 'errors' => $error, 'sum' => $sum));
    echo json_encode([
        'status' => $status,
        'output' => $output,
        'outputClass' => $outputClass,
        'errors' => $error,
        'sum' => $sum
    ]);
    exit;
}

echo "No valid action specified.";