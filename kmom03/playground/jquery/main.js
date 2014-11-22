$(document).ready(function () {
    'use strict';

    $('.box').click(function(event) {
        $(this).
    });


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
        /*event.stopPropagation(); FÖR ATT STOPPA PROPAGATION*/
    });

    /**
     * Assignment 3
     */

    var addColor = function() {
        var palette = $('<div></div>')
            .addClass('palette')
            .css('background-color', $('#box3_color').val())
            .insertAfter('#palette');
        console.log("Adding an item to the color palette." + $('#box3_color').val());

        palette.click(function() {
            $(this).remove();
            console.log("Removing an item from the color palette.");
        });

    };

    $('#box3 input[type=button]').click(addColor);
        $('#box3 input[type=text]').keypress(function(event) {
            if (event.which === 13) {
                event.preventDefault();
                addColor();
            }
    });

    /**
     * Assignment 4
     */
    var img = $('#js');

    $('#box4_width_incr').click(function(event) {
        img.width(img.width() + 15);
    });

    $('#box4_width_decr').click(function(event) {
        img.width(img.width() - 15);
    });

    $('#box4_height_incr').click(function(event) {
        img.height(img.height() + 15);
    });

    $('#box4_height_decr').click(function(event) {
        if (img.height() < 280) {
            alert('img height cant be less than 280');
        } else {
            img.height(img.height() - 15);
        }
    });

    $('#box4 #current').click(function(event) {
        event.preventDefault();
        console.log('Width: ' + img.width() + ' height: ' + img.height());
    });


    /**
     * Assignment 5
     */

    $('#box5 #animate').click(function(event) {
        event.preventDefault();
        var radioButton = $("#box5 input[type='radio']:checked"),
            img = $('#box5_js');
        console.log(radioButton.val());
        if (radioButton.val() === 'fadeToggle') {
            // Img fadeToggle
            img.fadeToggle(800);
        } else {
            // else do slideToggle (same as no radio button pressed)
            img.slideToggle(800);
        }
    });

    /**
     * Assignment 6
     */

    /**
     * Position the lightbox image
     */
    function positionLightboxImage() {
        var top = ($(window).height() - $('#lightbox').height()) / 2,
            left = ($(window).width() - $('#lightbox').width()) / 2;

        $('#lightbox').css({
            'top': top + $(document).scrollTop(),
            'left': left
        }).fadeIn();
    }

    /**
     * Remove the lightbox
     */
    function removeLightbox() {
        $('#overlay, #lightbox').fadeOut('slow', function() {
            $(this).remove();
            $('body').css('overflow-y', 'auto'); // show scrollbars
        });
    }

    /**
     * Make it happen when we click on a class with lightbox
     */
    $('.lightbox').click(function(event) {

        // Hide scrollbars
        $('body').css('overflow-y', 'hidden');

        // Create overlay div
        $('<div id="overlay"></div>')
            .css('top', $(document).scrollTop())
            .css('opacity', '0')
            .animate({'opacity': '0.5'}, 'slow')
            .appendTo('body');

        // Create lightbox div to the body and hide it.
        $('<div id="lightbox"></div>')
            .hide()
            .appendTo('body');

        // If users press ESC, remove the lightbox.
        $(document).keyup(function(event) {
            console.log("körde ");
            if (event.keyCode === 27) {
                removeLightbox();
            }
        });

        // Remove the lightbox if users clicks on the overlay.
        $('#overlay').click(removeLightbox);

        // Create <img> with object notation, passing object as the second parameter (jQuery is kinda smart).
        $('<img>', {
            src: $(this).attr('src'),
            load: positionLightboxImage,
            click: removeLightbox,
            /*on: {
                keyup: function(event) {
                    console.log("e" + event.keyCode);
                    if (event.keyCode === 27) {
                        removeLightbox();
                    }
                }
            }*/
        }).appendTo('#lightbox');

        return false;
    });

    /**
     * Assignment 7
     */
    var galleryInit = function() {
        var current = null;

        // loop through all images.
        $('.gallery-all img').each(function() {
            $(this).attr('src', $(this).attr('data-src')).click(function() {
                if (!current) {
                    // Set current
                    current = this;
                } else {
                    // Toggle current
                    $(current).toggleClass('selected');
                    current = this;
                }
                $(this).toggleClass('selected');
                $('.gallery-current img').attr('src', $(this).attr('data-src'));
            });
        });

        // Trigger click on the first image.
        $('.gallery-all img').first().trigger('click');
    };
    galleryInit();


    /**
     * Assignment 8
     */

    var slideshowInit = function() {
        var nrOfImages = $('.slideshow img').length,
            currentImage = nrOfImages - 1,
            zIndex = parseInt($('.slideshow').css('z-index')),
            currentZIndex = zIndex,
            intervalId = null;

        var rotateImages = function() {
            $('.slideshow img')
                .eq(currentImage)
                .fadeOut('slow', function() {
                    $(this)
                        .css('z-index', zIndex)
                        .fadeIn(0)
                        $(this)
                            .css('z-index', zIndex)
                            .fadeIn(0)
                            .siblings().each(function() {
                                $(this).css('z-index', ((parseInt($(this).css('z-index')) - zIndex + 1) % nrOfImages + zIndex));
                            });
                });

            currentImage = (nrOfImages + currentImage - 1) % nrOfImages;
            console.log("rotating pictures in slideshow. " + currentImage);
        };


        $('.slideshow img').each(function() {
            $(this)
                .attr('src', $(this).attr('data-src'))
                .css('z-index', currentZIndex++);
        })
        .click(rotateImages);

        intervalId = setInterval(function() { rotateImages(); }, 2000);
    };


    slideshowInit();


});