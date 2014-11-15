<?php
    $path = __DIR__;
    $title = 'Template for test programs';
    include($path . '/../template/header.php');
?>


<div id='flash'>
    <div id='table'></div>

    <div id='status'>
        <form>
            <label for="bankroll">Bankroll: </label>
            <input type="number" id="bankroll" value="100">

            <label for="bet">Bet: </label>
            <input type="number" id="bet" value="10">

            <select id="colors">
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="green">Green</option>
            </select>

            <input type="submit" id="roll" value="Roll">


        </form>

        <div id="log"></div>
    </div>
</div>

<?php
    include ($path . '/../template/footer.php');
?>