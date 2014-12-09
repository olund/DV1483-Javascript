KMOM04
=============
**Kursmomentet utvecklades i Google Chrome Canary**

Jaha då var kursmoment 4 avklarat. Det har inte blivit som jag ville ha det men det får duga. Hade stora förväntningar om det här kursmoment men lathet och familjesjukdom kom ivägen och jag har inte kunnat lägga ner den tiden som egentligen krävs.

##Ajax
Ajax känns väldigt bra när man arbetar med det med hjälp av jQuery, annars är det ett helvete. För några år sedan kodade jag en simpel hemsida och ville använda mig av AJAX utan några kunskaper, det gick men var väldigt omständigt. Med jQuery fungerar det bara, inget krångel för fem öre och det är lätt att komma igång med. Slippa använda uråldriga `XmlHttpRequest` problemen mellan olika browsers och använda JSON istället för XML måste jag verkligen tacka jQuery skaparna för.

Ajax känns nytt och fräscht, ett nytt sätt att tänka och det blir mer som en vanlig desktop applikation utan den jobbiga page-loaden. Ajax ger dig en fantasktisk möjlighet att skapa webbsidor med dynamiskt innehåll utan att behöva ladda om sidan.

Jag har testat alla short-hand metoder men det var ingen som lockade. Det var mycket lättare att använda `$.ajax({...})` och verkligen förstå hur det är uppbyggt. Jag har använt mig av $.ajaxSetup för att förenkla arbetet med att slippa skriva url, type och dataType varenda gång man gör ett anrop med ajax.

```
$.ajaxSetup({
    url: 'checkout.php',
    type: 'POST',
    dataType: 'json'
});
```

Bestämde mig även för att använda `.done` och `.fail` istället för `success: function(data) {...}`

Såhär kunde det se ut istället då:
```
$.ajax({
    url: 'path/to/url',
}).done(function(data) {
    console.log(data);
}).fail(function(jqXHR, textStatus, errorThrown ) {
    console.log("clearCart failed... ", textStatus, errorThrown);
});
```


##Webshop
Då var det äntligt dags att koda en webbshop, det är något jag alltid viljat göra sen jag började programmera men har aldrig haft kunskap eller tid för att lyckas. Nu ska jag banne mig skapa en rejäl webshop tänkte jag men det blev inte så direkt.. Min plan var att skapa ett RESTfuAPI med hjälp av Phalcon eller Laravel men insåg att det blev för mycket, jag får ta det som ett slutprojekt av kursen istället.

PHP koden för server-sidan kändes uråldrig och när min plan att använda ett RESTfuAPI gick i bitar använde jag mos kod som bas men gjorde även ändringar som passade min webshop bättre.


Min webshop är en simpel webshop som till utseendet liknar exemplet, webshoppen säljer 3 "testItem" och dessa ligger hårdkodade i php-koden.. I en riktigt webshop ligger varorna självklart i en databas.

Jag wrappade all min javascript kod i ett objekt för att det ska bli enklare att hålla reda på vad som gör vad.
```
var ShoppingCart = {
    init: function(config) {
        this.config = config;
        this.bindEvents();
    ,
    bindEvents: function() {
         this.config.form.on('submit', this.buy);
    },
    buy: function() { ... }
    ....
```
Jag kallar på init metoden och skickar med några parametrar för hålla reda på alla html-element. Jag läste att det ska vara bättre att skapa variabler för alla element så jQuery slippar söka igenom dom-trädet för att leta upp elementet flera gånger. 
```
ShoppingCart.init({
    items_table_template: $('#items_table_template'),
    clear: $('#clear'),
    ...
});
```



##Annat random

Jag använder ett bra plugin till Chrome för att lättare se uppbyggnaden av ett JSON objekt/arrayen(?) som heter JSONView.  JSONView fixar indentering och det blir enklare att se..

##Login
user -> username, alltid svårt att veta vad variabeln verkligen heter, var det user eller username?! 

När jag använder buttons istället för inputs, hur ska man tänka?
`event.preventDefault();` måste användas för att stoppa default events. Vad är egentligen bäst när man kodar JS? 

###Felmeddelande
```
addToCart failed...  parsererror SyntaxError: Unexpected token < {stack: (...), message: "Unexpected token <"}message: "Unexpected token <"stack: (...)get stack: function () { [native code] }arguments: nullcaller: nulllength: 0name: ""prototype: StackTraceGetter__proto__: function Empty() {}<function scope>set stack: function () { [native code] }arguments: nullcaller: nulllength: 1name: ""prototype: StackTraceSetter__proto__: function Empty() {}<function scope>__proto__: Error
```
Tydligen returnerar den `<html>` och då får man alltså `Unexpected token <`.
Det var min PHP kod som problem och hade syntax error... Glömt att sätta på error_reporting.. Ett riktigt störande fel faktiskt.

##Tankar
Suveränt kursmoment, men kändes något utdaterad eftersom PHP koden såg ut som skit. Varför har inte Anax-MVC ett stöd för RESTfuAPI.