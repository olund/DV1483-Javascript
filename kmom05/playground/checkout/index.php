<?php
    error_reporting(-1);
    session_name('olund-shoppingcart');
    session_start();

    $path = __DIR__;
    $title = 'Checkout';
    // Include the form
    include('cc_form.php');

    include($path . '/../template/header.php');
?>

<div id='flash'>
    <a href="../shopping-cart">Tillbaka</a>
    <h1>Checkout</h1>
    <p>
        You have <span id="nrOfItems"></span> items in your shopping-cart.
    </p>
    <p>
        The following sum will be charged on your credit card: <span id='sum'></span> SEK.
    </p>

    <div id='output'></div>
    <?=$form->GetHTML(array('id' => 'form1', 'columns' => 2))?>
</div>

<?php
    include ($path . '/../template/footer.php');
?>