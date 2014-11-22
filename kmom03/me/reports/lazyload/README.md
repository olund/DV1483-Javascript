##Usage
Use a placeholder image in the src attribute - something to be displayed while the original loads
- and include the actual image source in a "data-src" attribute.

**Like this:**
```
<img data-src="http://lorempixel.com/g/800/500/city/1" src="img/loader.gif" />
```

Run the script on document ready:

```
$(document).ready(fcuntion() {
    $('img').lazyLoadImages();
});
```

##Threshold
By default, imgaes are loaded when the user scrolls to them.

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