Använder JSONView för att enklare se hur JSON "objektet/arrayen???" är uppbygd. JSONView fixar indentering och det blir enklare att se..


##Login
user -> username, roligt fel man hade..

event.preventDefault(); för att jag använde buttons istället för inputs
Preventdefaults "blockerar" HTMl5 validering.. Hm ska man kanske byta ut button tills inputs ändÅ????


##Shopping Cart
Dags att koda sin egan shopping-cart! Något jag alltid viljat göra men aldrig gjort. 

Såppas dålig PHP kod, kändes inte värt att ens försöka bygga något eget. Ville göra ett RestFul Api med PHALCON men phalcon finns inte på studentservern.. Tar för lång tid att sätta sig in i ett nytt ramverk för att det ska vara värt att göra något på riktigt.


###Roliga felmeddelandet
```
addToCart failed...  parsererror SyntaxError: Unexpected token < {stack: (...), message: "Unexpected token <"}message: "Unexpected token <"stack: (...)get stack: function () { [native code] }arguments: nullcaller: nulllength: 0name: ""prototype: StackTraceGetter__proto__: function Empty() {}<function scope>set stack: function () { [native code] }arguments: nullcaller: nulllength: 1name: ""prototype: StackTraceSetter__proto__: function Empty() {}<function scope>__proto__: Error
```
Tydligen returnerar den <html> och då får man alltså `Unexpected token <`.
Det var min PHP kod som hade syntax error... Glömt att sätta på error_reporting.. riktigt störande fel faktiskt. 