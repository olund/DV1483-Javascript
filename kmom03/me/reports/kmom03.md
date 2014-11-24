KMOM03
=============
**Kursmomentet utvecklades i Google Chrome Canary**

Alla övningar hittar du [här](http://www.student.bth.se/~heoa13/js/kmom03/playground/jquery/)

Mitt plugin hittar du [här](http://www.student.bth.se/~heoa13/js/kmom03/me/lazyloadimages.php)

**jQuery, jag gillar dig bara mer och mer! Vilket kul kursmoment!**

Har aldrig byggt något själv i jQuery utan bara kopierat färdiga plugins tidigare. En sak som är väldigt positiv är att det blir bara roligare och roligare att arbeta med javascript. Om jag skulle få en önskning om hur kursen kan förbättras, önskar jag att vi skulle gå in på att använda Javascript ramverk. 

Som vanligt gör mos ett bra kursmoment där man får bygga enkla saker som tillslut blir hyffsat avancerade, och allt följer en röd tråd. Allt är såklart väldigt nytt men jQuerys dokumentation är suverän och väldigt enkel att följa. 

Har varit lite lat när jag valde bilder och skalade oftast ner dem direkt i HTML'n, och tyvärr påverkar det laddningstiden lite.. Saknar `img.php` som mos använde sig av i övningarna..


##Övningar:
###[Uppgift 1](http://www.student.bth.se/~heoa13/js/kmom03/playground/jquery/#box1)
Inverterar bildfärgen, texten har annan färg.

###[Uppgift 2](http://www.student.bth.se/~heoa13/js/kmom03/playground/jquery/#box2)
Togglar samma invert klass på bilden.
Ändrar storleken på bilden genom en egen animering
```
var imgWidth = $(this).width() === 300 ? '200px' : '300px';
$(this).animate({ width: imgWidth });
```

###[Uppgift 3](http://www.student.bth.se/~heoa13/js/kmom03/playground/jquery/#box3)
Gjorde om mos variant, lite styling osv.

###[Uppgift 4](http://www.student.bth.se/~heoa13/js/kmom03/playground/jquery/#box4)
Ändrar widht, height via knappar och `img.width()` och `img.height()` istället för att använda CSS som mos använde..

###[Uppgift 5](http://www.student.bth.se/~heoa13/js/kmom03/playground/jquery/#box5)
Radio buttons för `slideToggle` och `fadeToggle`, tryck på `doIt` för att göra animationen. (om man inte har tryckt på någon radio button så körs slideToggle).

###[Uppgift 6](http://www.student.bth.se/~heoa13/js/kmom03/playground/jquery/#box6)
Min variant av lightbox utgår ifrån boken men använder en alternativ syntax när man skapar element. 

Vill att min lightbox ska kunnas stänga ner vid en ESCAPE knapptryckning och om man klickar på bilden eller overlay'n och det kan man också göra nu.

Hade problemet med att keyup eventet inte registrerades korrekt:
Varför fungerar inte on keyup eventet? vad jag kan se är det exakt likadant som i jQuerys [wiki: (precis över)](http://api.jquery.box2com/jQuery/#entry-examples-1)
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
För att lösa problemet körde jag istället, vilket fungerar men den körs även om lightboxen inte är "aktiv".
```
$(document).keyup(function(event) {
    if (event.keyCode === 27) {
        removeLightbox();
    }
});
```

###[Uppgift 7](http://www.student.bth.se/~heoa13/js/kmom03/playground/jquery/#box7)
Massa valideringsfel.. Inget att bry sig om antar jag. Javascripten manipulerar HTML och allting blir ju rätt.



##[Lazyload-images.js](http://www.student.bth.se/~heoa13/js/kmom03/me/lazyloadimages.php)
Mitt plugin laddar in bilder när dem behövs, istället för att ladda in alla samtidigt. Bilder utanför "vyn" laddas inte förrän användaren scrollar till dem. Vilket ser visuellt snyggt ut och förbättrar prestandan eftersom alla resurser behöver inte laddas inte direkt.

Jag valde att skapa pluginet för att jag vill ha kunskap inför mitt egna projekt som ska använda sig av "Continues Scroll" och "Lazy load images". 

Insåg att mitt val var rätt avancerat och jag var tvungen att kopiera en stor del kod, men jag har lärt mig väldigt mycket. Jag har spenderat väldigt mycket tid på jQuerys dokumentation för att lära mig vad alla funktioner gör. Några av exempel av metoder jag använder mig av ser du nedanför:
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

LÄS MER OM PLUGINET [HÄR](http://www.student.bth.se/~heoa13/js/kmom03/me/lazyloadimages.php)

##Nerladdning av pluginet:
[jquery.lazyload-images.js](http://www.student.bth.se/~heoa13/js/kmom03/me/js/jquery.lazyload-images.js)      
[jquery.lazyload-images.min.js](http://www.student.bth.se/~heoa13/js/kmom03/me/js/jquery.lazyload-images.min.js)    
Använde mig av [jsmini.com](http://www.jsmini.com/) för att minifiera. (Inte testkört minifieringen ännu, men den bör fungera).

###Referenser:
[http://www.appelsiini.net/projects/lazyload](http://www.appelsiini.net/projects/lazyload)    
[https://github.com/luis-almeida/unveil/](https://github.com/luis-almeida/unveil/)    
[http://plugins.jquery.com/lazy/](http://plugins.jquery.com/lazy/)