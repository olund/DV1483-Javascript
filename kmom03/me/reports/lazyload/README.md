##Usage
Lazyload-Images depends on jQuery. Include them both at the end of your HTML code:
```
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.lazyload-images.js" type="text/javascript"></script>
```

Use a placeholder image in the src attribute - something to be displayed while the original loads
- and include the actual image source in a "data-src" attribute.

**Like this:**
```
<img data-src="http://lorempixel.com/g/800/500/city/1" src="img/loader.gif" />
```

Run the script on document ready:

```
$(document).ready(function() {
    $('img').lazyLoadImages();
});
```

##Threshold
By default, images are loaded when the user scrolls to them.

If you want your images to load earlier than, lets say 300px before they appear on the screen, you can set the threshold like this:
```
$('img').lazyLoadImages(300);
```

##Callback
As a second parameter you can also specify a callback function that will fire after an image has been loaded.

```
img {
    opacity: 0;
    transition: opacity .3s ease-in;
}

$("img").lazyLoadImages(300, function() {
    $(this).load(function() {
        this.style.opacity = 1;
    });
});
```

##Download
[Get it here](http://www.student.bth.se/~heoa13/js/kmom03/me/js/jquery.lazyload-images.js)
