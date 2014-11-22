<?php
    $path = __DIR__;
    $title = 'Template for test programs';
    include($path . '/../template/header.php');
?>

<div id='box1' class='box'>
    <h1>Uppgift 1</h1>
    <img src='img/logo.png' style="width: 300px" alt='' />
    <h2>En vacker logo</h2>
    <p>Se vad roligt man kan ha när man kodar JS.</p>
</div>


<div id='box2' class='box'>
    <h1>Uppgift 2: Event propagering</h1>
    <img src='img/logo.png' style="width: 300px" alt='' />
    <h2>Klicka på bilden för att förminska den</h2>
    <p>Se vad roligt man kan ha när man kodar JS.</p>
</div>


<div id='box3' class='box'>
    <h1>Uppgift 3: Lägg till/Ta bort element</h1>
    <form>
        <label>Colorcode in hex (#eee or #5c5c5c): <input id='box3_color' type='text' name='color' /></label>
        <input id='box3_add' type='button' value='Add color' />
    </form>
    <p id='palette'>Color Palette:</p>
</div>


<div id='box4' class='box'>
    <h1>Uppgift 4: Ändra storlek på element</h1>
    <form>
        <img id="js" src='img/logo.png' style="width: 300px" alt='' />
        <p>
            <label>Width: </label>
            <input id='box4_width_incr' type='button' value='+'>
            <input id='box4_width_decr' type='button' value='-'>
        </p>
        <p>
        <label>Height: </label>
            <input id='box4_height_incr' type='button' value='+'>
            <input id='box4_height_decr' type='button' value='-'>
        </p>

        <input id="current" type="submit" value="Log dimensions">
    </form>
</div>


<div id='box5' class='box'>
    <h1>Uppgift 5: Animeringar</h1>
    <form>
        <img id="box5_js" src='img/logo.png' style="width: 300px" alt='' />
        <p>
            <input type="radio" name="toggle" value="slideToggle">slideToggle
            <input type="radio" name="toggle" value="fadeToggle">fadeToggle
        </p>
        <input id="animate" type="submit" value="Do it">
    </form>
</div>


<div id='box6' class='box'>
    <h1>Uppgift 6: Lightbox</h1>
    <img id="box6_js" class="lightbox" src='img/logo.png' style="width: 50%" alt='js'>
</div>

<div id='box7' class='box'>
    <h1>Uppgift 7: Image gallery</h1>
    <div class='gallery'>
        <div class='gallery-current'>
            <img/>
        </div>
        <div class='gallery-all'>
            <img data-src='img/1.jpg' alt="gallery-img"/>
            <img data-src='img/2.jpg' alt="gallery-img"/>
            <img data-src='img/3.jpg' alt="gallery-img"/>
            <img data-src='img/4.jpg' alt="gallery-img"/>
            <img data-src='img/5.jpg' alt="gallery-img"/>
            <img data-src='img/6.jpg' alt="gallery-img"/>
        </div>
    </div> <!-- end of gallery -->
    <p>An image gallery may look in many ways but it usually acts as a container for a bunch om images and allows for the user to easily traverse and look at the images.</p>
</div>


<div id='box8' class='box'>
    <h1>Uppgift 8: Slideshow</h1>
    <div class="slideshow">
        <img data-src="img/5.jpg" alt="1">
        <img data-src="img/4.jpg" alt="1">
        <img data-src="img/3.jpg" alt="2">
        <img data-src="img/2.jpg" alt="3">
        <img data-src="img/1.jpg" alt="4">
    </div>

</div>





<?php
    include ($path . '/../template/footer.php');
?>