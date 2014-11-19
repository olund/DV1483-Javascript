$(document).ready(function() {
    'use strict';
    var text = document.getElementById('text'),
        print,
        print2,
        str;


    /**
     * [print description]
     */
    print = function(element, string) {
        element.innerHTML += '<br>' + string + ' <b> Length: ' + string.length + '</b>';
    };

    /**
     * [print2 description]
     */
    print2 = function(element, string) {
        element.innerHTML += '<br>' + string + ': <b>' + typeof(string) + '</b>';
    };

    text.innerHTML = '<h1>Strings - Datatypes and values</h1>';
    text.className = 'black';


    str = 'Copyright \u00A9 by XXX';
    print(text, str);

    str += ' Mumintrollet ';
    print(text, str);

    str += 1942;
    print(text, str);

    str += '.';
    print(text, str);

    // 0 startar stringen på, 15 är fram till XXX. 19 är efter xxx osv...
    str = str.substring(0, 15) + str.substring(19, str.length);
    print(text, str);


    str = '19' + '42';
    print2(text, str);

    str = '19' + 42;
    print2(text, str);

    str = 19 + 42;
    print2(text, str);

    str = 19 + "42";
    print2(text, str);

});