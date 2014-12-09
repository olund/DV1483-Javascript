<?php
    $path = __DIR__;
    $title = 'Template for test programs';
    include($path . '/../template/header.php');
?>

<div id='flash'>
    <h1>A damn small webshop</h1>

    <div id="cart">
        <div id='content'></div>
        <p>
            Items in cart: <span id="numitems">0</span><br/>
            Total is: <span id="sum"></span> SEK<br/><br/>
            <p>
                <button class="asdf">
                    <a href='../checkout'>Checkout</a>
                </button>

                <input id="clear" class="purchase" type="button" value="Clear" />
            </p>
            <span id="status">Nothing has happened yet. Make a purchase.</span>
       </p>
    </div>

    <table>
        <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Buy</th>
        </tr>
        <tr>
            <td><img src="img/200x100.gif"></td>
            <td>Test Item 1</td>
            <td>5.5 SEK</td>
            <td><button id='item1' class="purchase">Buy</button></td>
        </tr>
        <tr>
            <td><img src="img/200x100.gif"></td>
            <td>Test Item 2</td>
            <td>6.6 SEK</td>
            <td><button id='item2' class="purchase">Buy</button></td>
        </tr>
        <tr>
            <td><img src="img/200x100.gif"></td>
            <td>Test Item 3</td>
            <td>7.7 SEK</td>
            <td><button id='item3' class="purchase">Buy</button></td>
        </tr>
    </table>


</div>

<?php
    include ($path . '/../template/footer.php');
?>