KMOM02 - Programmera med JavaScript
=============
Kan såhär i efterhan tycka att det var en väldigt lång uppgift... Det tog sin lilla tid men allt skall fungera som det ska. Kände nästan till allting eftersom jag har lite kunskaper i NodeJS. Men det är alltid bra med repetition.


Kände inte direkt för att återskapa hjulet under de tre första uppgifterna så jag skrev av allt och förstod vad som hände och jag tycker att det räckte. Har tidigare använt bland annat `instanceof`, `typedef` och `substr`.

###Uppgifter
####[datatypes-and-values-using-numbers](http://www.student.bth.se/~heoa13/js/kmom02/playground/datatypes-and-values-using-numbers/)
Har tidigare använt Number och Math.. Inget direkt nytt förutom "konstanterna" PI, E och så vidare. Har inte haft något behov att använda mig utav dem och om behovet skulle skulle finnas är det en sökning på MDN som hade gett mig resultat direkt.

####[datatypes-and-values-using-strings](http://www.student.bth.se/~heoa13/js/kmom02/playground/datatypes-and-values-using-strings/)
Har tidigare också använt mig av substr osv, inget nytt...


####[Throwing-dice-using functions](http://www.student.bth.se/~heoa13/js/kmom02/playground/throwing-dice-using-functions/)
Random hittade jag på mdn, men insåg att den inte fungerade exakt som jag ville, satte -1 på ett ställe och blev nöjd. Nu kan man skriva random (0,6) och verkligen få värden från 0 till 6. Såg att Mos hade tänkt likadant vilket var bra.

###Funktioner i olund.js
Har inte prioriterat att fylla olund.js med hjälpfunktioner direkt.. Har istället börjat använda debuggern i chrome/firebug för att kolla värden och så vidare.

Vi gick igenom Reflection under kmom02 föreläsningen och det kändes vettigt att lägga till den. Det finns även en random funktion som var kravet, jag kollade upp på MDN.
Något vettig funktion man kan lägga till är "dump" i olika former.



###[Boulder Dash](http://www.student.bth.se/~heoa13/js/kmom02/playground/boulder-dash/)
Boulder Dash var en rätt rolig uppgift faktiskt. Först gjorde jag exakt likadant som mos och det fungerade fint. Insåg att jag måste faktiskt skriva kod själv för att lära mig mer om JavaScript på klientsidan.


Jag bestämde mig för att göra en egen version av boulder dash, jag vet egentligen inte vad boulder dash är så jag fick för mig att jag skulle skapa en kopia av en labyrint jag använde när jag spelade custom mapen [Wintermaul One](http://gaming-tools.com/warcraft-3/wp-content/uploads/sites/10/wintermaul-guide-485x386.jpg) i spelet Warcraft 3.

Min version av boulder dash använder sig av en 2D array istället för dubbla endimisionella arrayer. Den är uppbyggd lite annorlunda, den använder sig av "Module pattern" (som modernizr) och då kan man exempelvis skriva `BoulderDash.move i konsollen för att flytta baddie'n.

Matematiken för att räkna ut var blocken skulle sitta var inte svår när jag tänker efter men det krånglade som bara den, här spendare jag väldigt mycket tid. Man kan alltid förbättra koden och det finns säkert något annat smartare sätt att skriva den men just nu känner jag mig rätt nöjd när det äntligen fungerar.

Just nu går det ej att flytta baddien men är för trött för att tänka klart och det står ingenstans i uppgiften att det skall gå heller för den delen.
Nöjer mig mitt resultat sålänge.. Har som sagt redan fått Mos version att fungera.

###[Roulettespelet](http://www.student.bth.se/~heoa13/js/kmom02/playground/roulette/)
Tyvärr hade jag ingen tid att spendera extra funktionalitet på roulettespelet men det fungerar som det skall. PreventDefaults är även tillagd för att slippa att formen submittar sig själv vilket jag hade problem med.


###Random
Min markdown fungerar bra nu, hade missat att använda `MarkdownExtra::defaultTransform($text)` från Michel F's markdown paket. Förut använde jag `Markdown::defaultTransform($text)` utan Extra och syntax-highlighten fungerade inte alls.


Använder inte längre JSLint till Sublime, jag använder JSHint istället. Jag tycker det fungerar mycket bättre och ett plus är att man kan ändra i pluginets konfiguration mycket lättare/bättre.

Har ett stort dilemmea nu när man kollade in Douglas 30 minuters video om kodningsstandard. Han tyckte att JSHint var dåligt jämfört med hans egna JSLint. Får se senare i kursen vilket jag föredrar, jag bör nog inte lita helt och hållet på honom även om han kallas för "javascript gurun". Personligen gillar jag Paul Irish, han verkar otroligt duktig och mycket bättre föreläsare. Använder en 'kopia' av hans dotfiles :)