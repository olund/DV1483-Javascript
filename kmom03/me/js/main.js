$(document).ready(function () {
    'use strict';
    console.log('Loaded');

    /*$("li img").lazyLoadImages();*/
    $("img").lazyLoadImages(1, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        });
    });
});