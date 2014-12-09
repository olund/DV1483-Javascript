<?php
error_reporting(-1);
session_name('olund-shoppingcart');
session_start();


$items = [
    'item1' => [
        'title' => 'testItem1',
        'price' => 5.5
    ],
    'item2' => [
        'title' => 'testItem2',
        'price' => 6.6
    ],
    'item3' => [
        'title' => 'testItem3',
         'price' => 7.7
    ]
];

$action = isset($_GET['action']) ? $_GET['action'] : '';

// Create the shopping cart in the session if it does not exists.
// And support action=clear to do the same.
if ($action == 'clear' || !isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [
        'sum' => 0,
        'numitems' => 0,
        'items' => [],
    ];
}


// Add items to shopping cart
if ($action === 'add' && !empty($_POST['itemid'])) {
    $itemid = $_POST['itemid'];
    $price = $items[$itemid]['price'];
    $title = $items[$itemid]['title'];

    if (isset($_SESSION['cart']['items'][$itemid])) {
        $_SESSION['cart']['items'][$itemid]['numitems']++;
        $_SESSION['cart']['items'][$itemid]['sum'] += $price;
    } else {
        $_SESSION['cart']['items'][$itemid] = [
            'numitems' => 1,
            'sum' => $price,
            'title' => $title
        ];
    }

    $_SESSION['cart']['numitems']++;
    $_SESSION['cart']['sum'] += $price;
}


$items = $_SESSION['cart']['items'];

$rows = null;

foreach ($items as $key => $value) {
    $rows .= "
            <tr>
                <td>{$value['title']}</td>
                <td>{$value['numitems']}</td>
                <td>{$value['sum']}</td>
            </tr>\n";
}

$items = $_SESSION['cart']['content'] = <<<EOD
<table>
    <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Sum</th>
    </tr>
    {$rows}
</table>
EOD;

header('Content-type: application/json');
echo json_encode($_SESSION['cart']);

