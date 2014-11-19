Kmom01: Kom igång med JavaScript
===================

Jaha, då startar kursen javascript vilket känns väldigt bra då man slipper koda på det individuella projektet. Har alltid tyckt att javascript var för designers och skapa JQuery plugins men har helt ändrat min åsikt efter det individuella projektet.
Där skapade jag en site med NodeJS och mina ögon öppnades totalt. Trodde aldrig att javascript kunde vara så kraftfullt.

##Utvecklingsmiljö
Som vanligt kör jag på min hackintosh, inge vidare specs på den men det fungerar fint med OS X Yosemite (10.10). 

Min texteditor av val är Sublime Text 2 med SFTP, JSLint plugins med mera. Försökte använda [brackets.io](https://brackets.io) som är en editor skapad i HTML5, CSS, Javascript. [Brackets.io](https://brackets.io) är perfekt om man ska koda html och javascript eftersom den har Live preview och inline editors vilket jag föll för men det kändes för ovant. Kanske kollar in det mer senare men nu räcker Sublime gott och väl, det blir ännu bättre om man använder [LiveRealod](https://livereload.com/).

##Uppfattning av JavaScript
Jag tror JavaScript är framtiden för webben. Finns fruktansvärt många ramverk och javascript former att använda och det skapas nya hela tiden. Ett trevligt GitHub repo jag hittade var [TodoMVC](https://github.com/tastejs/todomvc) som innehåller Todo applikationer i de kändaste javascript ramverken (emberjs, angular osv).

##Exempelprogram
Passade på i detta kursmoment att skriva av all kod manuellt så man verkligen förstår vad som händer. Ingen copy paste här inte :p


###[resize-element](https://www.student.bth.se/~heoa13/js/kmom01/playground/resize-element/) 
Fungerar som den ska, jag ändrade standard värden för height och width och la till att man kunde göra en reset också. 


###[move-around-css-sprite-using-css3-transitions](https://www.student.bth.se/~heoa13/js/kmom01/playground/move-around-css-sprite-using-css3-transitions/)
CSS Sprite, vilken jävla skit. Spenderade minst 2 timmar för att hitta en ny sprite och ändra värden i main.js men ingen sprite ville se ut likadant som mos hade gjort det och mina ändringar på värden fungerade inte. Jag gav upp och ritade den i Photoshop istället med exakt samma mått och det fungerar..

###[css3-2d-transform-with-transitions](https://www.student.bth.se/~heoa13/js/kmom01/playground/css3-2d-transform-with-transitions/)
Fungerar som den ska göra, försökte på mig extrauppgiften och gjorde en "Uber" som gör en volt men det blev inte helt rätt. Kändes väldigt smidigt att använda alla mixins som redan fanns klara i base.less och det underlättade jobbet väldigt mycket. TODO: Skapa egen mixin

##Baddie
Min baddie är ingen baddie utan en cowboy. Han kan göra alla konster som mos baddie kan göra. Hade tyvärr ingen ork att göra något annat eftersom det tog sån långt tid att göra en egen css sprite.



##Random

Det var konstigt att inte h2 var definierat så man fick ju skapa en egen.
```
h2 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: @magic-number;
}
```

Försökte skapa en stil-ren me-sida, resultatet blev godkänt enligt mig. Har ju aldrig varit bra på design men har på senaste tiden blivit mer intresserad av ämnet. Eftersom man vill bli en ultimat webbprogrammerare bör man ju även kunna lista ut hur man skapar en hyffsad design. Inspiration fick jag från Google Material Design, google's nya hype och diggar deras tänk väldigt mycket.
[Här](https://www.google.com/design/spec/material-design/introduction.html) är en länk till den.

Har en bugg att några länkar är blåa och några är svarta vid markdown renderingen och jag är less på less.. Det får vara att några länkar blir blåa medans andra blir svarta.. Man märker om det är länk om man håller över den i alla fall. **FIXAT**: `.markdown-body a:visited` som krånglade. 

LESS är grymt, väldigt användbart att använda sig av &:
``& represents the current selector parent```


BTW Jane, klaga inte på mina absoluta länkar    
[21:43:56]  <@Olund>    scripten ligger /~heoa13/js/      
[21:44:51]  <@Sylvanas> Olund: funkar ju.    
[21:45:02]  <@Olund>    ja    
[21:45:08]  <@Sylvanas> jag hade hellre nog använt relativa men ni kan skylla på dålig exempelkod :P    
[21:45:26]  <@Olund>    klaga inte sen då när du rätt:d    


En random rolig sak är att CSS validerar eftersom den hittar ingen stylesheet.

GITHUB: https://github.com/olund/DV1483-Javascript
Redovisning: http://www.student.bth.se/~heoa13/js/kmom01/me/report.php?file=kmom01.md
Me-sidan: http://www.student.bth.se/~heoa13/js/kmom01/me/index.php
