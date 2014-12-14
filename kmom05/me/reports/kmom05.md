KMOM05
=============

**ÄNTLIGEN** är denna uppgiften klar och fyfan vad tråkigt det var.
Ser absolut ingen mening med att behöva skapa massa småspel hela tiden, man blir bara frustrerad och det kändes omöjligt att debuga med `console.log` när man får 48 miljoner loggar varje sekund. Något positivt är jag använde mig mer av debuggern i Chrome/Safari/Firefox. Något annat och klaga på är att  metoderna i `window.Key` inte fungerar i Google Chrome Canary, förflyttning av Asteroids spelet fungerade inte och jag tvingades köra Firefox eller Safari för att testa köra mitt spel och det kändes fruktansvärt krångligt och jobbigt. 

##Möjligheter med Canvas
Det finns stora möjligheter med canvas om man nu är intresserad av småspel eller rita figurer på en skärm. Personligen tycker jag det var riktigt onödigt att lägga ner såpass mycket tid på. Men det är klart att jag ser möjligheter med Canvas jämfört med Flash eller SVG bilder. 

PRO HTML5 boken förklarade canvas väldigt bra och det var lätt att följa med. 

##Snake - Mitt spel

![Snake the game](http://puu.sh/dqH2f/bc7869548c.png)

När jag hade gjort alla övningar trodde jag att man var klar, så var inte fallet. Jag hade missat den lilla detaljen att man skulle skapa ett eget spel. Efter många timmmars funderande och läsande av andra studenters kursmoment valde jag att skapa det klassiska spelet Snake man lirade på nokia 3310. Det kan ju inte vara så svårt tänkte jag, och oj oj oj vad jag tänkte fel. Spenderade många timmar på att googla fram förslag på lösningar men fick bara fram spaghettikod. Jag kände mig 'lost' flera gånger och undrarde hur jag skulle strukturerar upp min kod för bästa resultat.

Nu när jag ser tillbaka inser jag att det lossnade och blev roligare när jag äntligen fick fram ormen på skärmen. Efter allt krånglande mellan olika browsers och strul med felsökningen blev jag ändå nöjd med mitt resultat.



####Snake
>Snake är ett datorspel släppt 1978. Spelet går ut på att man ska styra en orm >och plocka små punkter som ger poäng. Ormen växer varje gång den går över en punkt, och tar därmed upp mer och mer plats på spelplanen. Spelet slutar om spelaren styr ormen in i sig själv, vilket till slut blir oundvikligt. Snake fanns till den legendariska datorn ABC 80 och hette då Masken [1]. Spelet har även släppts ett flertal gånger som mobilspel. 


I mitt spel åker en orm runt på skärmen, man styr ormen genom att använda piltangenterna. Man kan plocka poäng genom att flytta ormen till maten som ligger utplacerad på spelplanen. För varje matbit som ormen äter upp får man 10 poäng. Man förlorar spelet genom att åka in i en vägg eller ormen åker in i sig själv.

Jag har två egenskapde objekt som heter `Snake` och `Food`. Jag använder protoypbaserad programmering och även closure och module mönstret som var ett krav för uppgiften. Jag vet inte om jag tycker att det är så meningsfult när jag bara har två objekt men förstår tanken bakom. Snake objektet har diverse variabler som krävs och all funktionalitet sker i prototypen såsom draw, collision och update, samma gäller för Food.

Spelet startar när webbsidan har renderats men använder en fadeOut och och ett startmeddelande som skriver ut på skärmen att spelet start om 2 sekunder. 


En rolig effekt jag hittade på är att maten slumpar vilken färg det ska vara vid varje uppdatering.

*NOTERA:* `Collision between snake parts fungerar inte helt korrekt, vet inte varför och jag lyckas inte lösa det.

##Extrauppgiften
Jag har gjort implementerat extrauppgiften om ljud. Ljudet startar samtidigt som spelet och avslutas när man "dör". Ljudet kommer från det bästa spelet jag spelade i min barndom, [Top Gear till NES](http://upload.wikimedia.org/wikipedia/en/e/e7/Top_Gear_Coverart.png).




##Referenser
http://sv.wikipedia.org/wiki/Snake



