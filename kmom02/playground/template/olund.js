/**
 * Helpers and tools to ease your JavaScript day.
 * @author Henrik Ölund (me@henrikolund.se)
 * @thanks Mikael Roos (me@mikaelroos.se)
 */
window.Olund = (function (window, document, undefined) {
    var Olund = {};



    Olund.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    /**
    * Display the type of the object
    * @param the object to check
    */
    Olund.reflection = function (obj) {
        console.log("is type: " + typeof obj);

        if (isNaN(obj)) {
          console.log("is NaN, Not a Number");
        }

        if (isFinite(obj)) {
          console.log("is a real number, not Infinite nor NaN");
        }


        if(obj instanceof Array)    console.log("is instance of: Array");
        if(obj instanceof Boolean)  console.log("is instance of: Boolean");
        if(obj instanceof Date)     console.log("is instance of: Date");
        if(obj instanceof Function) console.log("is instance of: Function");
        if(obj instanceof Number)   console.log("is instance of: Number");
        if(obj instanceof Object)   console.log("is instance of: Object");
        if(obj instanceof RegExp)   console.log("is instance of: RegExp");
        if(obj instanceof String)   console.log("is instance of: String");
        if(obj instanceof Error)    console.log("is instance of: Error");

        if(obj !== null && typeof obj !== 'undefined') {
          console.log("toString(): " + obj.toString());
          console.log("valueOf(): " + obj.valueOf());
        }
    };


 /*
 function getAllPropertyNames( obj ) {
    var props = [];

    do {
        Object.getOwnPropertyNames( obj ).forEach(function ( prop ) {
            if ( props.indexOf( prop ) === -1 ) {
                props.push( prop );
            }
        });
    } while ( obj = Object.getPrototypeOf( obj ) );

    return props;
}*/


  /**
   * Display properties of an object
   * @param the object to show
   */
  Olund.properties = function (obj) {
    if(typeof obj !== 'object') {
        console.log('Not an object.');
    } else {
        console.log('Object has the following properties:')
        for (var prop in obj) {
        //if (obj.hasOwnProperty(prop)) {
          console.log(prop + ' : ' + obj[prop]);
        //}
        }
    }
  };


  /**
   * Dump own properties of an object
   * @param the object to show
   */
  Olund.dump = function (obj) {
    if (typeof obj !== 'object') {
        console.log('Not an object.');
    } else {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                console.log(prop);
            }
        }
    }
  };


  /**
   * Dump properties and values of an object
   * @param the object to show
   * @returns string
   */
    Olund.dumpAsString = function (obj) {
        var s = '\n';
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                s += prop + ' : ' + obj[prop] + '\n';
            }
        }
        return s;
    };


  /**
   * Delete cached LESS files from local storage.
   * @param regular expressen to search for, for example /style.less/
   */
    Olund.deleteLESSFromLocalStorage = function (which) {
        for (var item in window.localStorage) {
            if (item.match(which)) {
                console.log('Deleted ' + item + ':' + (delete window.localStorage[item]));
            }
        }
    };


  /**
   * Generate a random number.
   * @param min the smallest possible number
   * @param max the largest possible number
   * @returns a random number where min >= number <= max
   */
    Olund.random = function (min, max) {
        return Math.floor(Math.random()*(max+1-min)+min);
    };


  /**
   * Get the position of an element.
   * http://stackoverflow.com/questions/442404/dynamically-retrieve-html-element-x-y-position-with-javascript
   * @param el the element.
   */
    Olund.getOffset = function ( el ) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }
    //var x = getOffset( document.getElementById('yourElId') ).left;

    // Expose public methods
    return Olund;

})(window, window.document);