$(document).ready(function () {
    'use strict';

    /**
     * Assignment 1
     */

    $('#box1 h1, #box1 p, #box1 img').click(function() {
        /*console.log(this);*/
        $(this).toggleClass('invert');
    });

    /**
     * Assignment 2
     * Trying .on('click') instead, why not
     */

    $('#box2').on('click', function(event) {
        $(this).toggleClass('invert');
    });

    $('#box2 img').on('click', function(event) {
        var imgWidth = $(this).width() === 300 ? '200px' : '300px';
        $(this).animate({ width: imgWidth });
        console.log($(this).width());
    });

    /**
     * Assignment 3
     */
    var add = function() {
        $('<div></div>').insertAfter('#asdf').click(function() {
            $(this.remove);
            console.log('removing');
        });
        console.log('adding');
    }

    $('#btn').click(add);


});