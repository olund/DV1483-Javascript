<?php
    $path = __DIR__;
    $title = 'CSS3 2d transforms & transitions by LESS (mixins dude) triggered by JS';
    include($path . '/../template/header.php');
?>

<div id='flash'>
    <h1>h1 cuz why not</h1>
    <p>Click the mouse on a baddie to begin the action using CSS3 2D transformations with CSS3 transitions</p>
    <table>
        <tr>
            <td>Rotate x 0.5</td>
            <td>Rotate x 1.5</td>
            <td>Half size</td>
            <td>Double size</td>
            <td>Skew horisontal</td>
            <td>Skew vertical:</td>
            <td>Move</td>
            <td>Move and rotate</td>
            <td>Uber</td>
        </tr>
        <tr>
            <td><div id='b1' class='baddie'></div></td>
            <td><div id='b2' class='baddie'></div></td>
            <td><div id='b3' class='baddie'></div></td>
            <td><div id='b4' class='baddie'></div></td>
            <td><div id='b5' class='baddie'></div></td>
            <td><div id='b6' class='baddie'></div></td>
            <td><div id='b7' class='baddie'></div></td>
            <td><div id='b8' class='baddie'></div></td>
            <td><div id='b9' class='baddie'></div></td>
        </tr>
    </table>
</div>

<?php
    include ($path . '/../template/footer.php');
?>