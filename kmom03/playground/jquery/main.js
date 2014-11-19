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
    var addColor = function() {
        $('<div></div>')
            .addClass('palette')
            .css('background-color', $('#box3_color').val())
            .insertAfter('#palette')
            .click(function() {
                $(this).remove();
                console.log("Removing an item from the color palette.");
            });
        console.log("Adding an item to the color palette." + $('#box3_color').val());
    };

    $('#box3 input[type=button]').click(addColor);
        $('#box3 input[type=text]').keypress(function(event) {
            if (event.which == 13) {
                event.preventDefault();
                addColor();
            }
    });



});