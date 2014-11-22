KMOM03
=============

##Uppgift 1
Invert på bild, texten har annan färg

##Uppgift 2
Togglar samma invert klass
Ändrar storleken på bilden genom en egen animering
```
var imgWidth = $(this).width() === 300 ? '200px' : '300px';
$(this).animate({ width: imgWidth });
```

##Uppgift 3
Gjorde om mos variant, lite styling osv.


##Uppgift 4
Ändrar widht, height via knappar och `img.width` och `img.height` istället för att använda CSS som mos använde..

##Uppgift 5
Radio buttons för `slideToggle` och `fadeToggle`, tryck på doIt för att göra animationen. (om man inte har tryckt på någon radio button så körs slideToggle).

##Uppgift 6
Min variant av lightbox utgår ifrån boken men använder 


Vill att min lightbox ska kunnas stänga ner vid en ESCAPE knapptryckning och om man klickar på bilden eller overlay'n.

Hade problemet med att keyup eventet inte registrerades korrekt:
Varför fungerar inte on keyup eventet? vad jag kan se är det exakt likadant som i jQuerys wiki: (precis över) http://api.jquery.com/jQuery/#entry-examples-1
```
$('<img>', {
    src: $(this).attr('src'),
    load: positionLightboxImage,
    click: removeLightbox,
    on: {
        keyup: function(event) {
            console.log("e" + event.keyCode);
            if (event.keyCode === 27) {
                removeLightbox();
            }
        }
    }
}).appendTo('#lightbox');
```
För att lösa problemet körde jag istället
```
$(document).keyup(function(event) {
    if (event.keyCode === 27) {
        removeLightbox();
    }
});
```

##Uppgift 7
Massa valideringsfel.. vet inte hur man lösa problemet ännu..

Salmon färg på bordern :d











##Lazyload-image.js

###.one
The  `.one()` method is identical to  `.on()`, except that the handler is unbound after its first invocation.

###.filter
Description: Reduce the set of matched elements to those that match the selector or pass the function's test.

###.trigger
Description: Execute all handlers and behaviors attached to the matched elements for the given event type.

```
$( "#foo" ).on( "click", function() {
  alert( $( this ).text() );
});
$( "#foo" ).trigger( "click" );
```

###.not
Description: Remove elements from the set of matched elements.

###.scrollTop
Description: Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.


Lazy Image Loading Plugin
