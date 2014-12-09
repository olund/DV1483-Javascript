$(document).ready(function () {
    'use strict';

    console.log("Hello World");

    var t1 = document.getElementById('b1'),
        t2 = document.getElementById('b2'),
        t3 = document.getElementById('b3'),
        t4 = document.getElementById('b4'),
        t5 = document.getElementById('b5'),
        t6 = document.getElementById('b6'),
        t7 = document.getElementById('b7'),
        t8 = document.getElementById('b8'),
        t9 = document.getElementById('b9');

    // Set t1-8 swap to 1 so we can check things with %
    t1.swap = t2.swap = t3.swap = t4.swap = t5.swap = t6.swap = t7.swap = t8.swap = t9.swap = 1;

    /**
     * Flip function
     */
    t1.onclick = (function () {
        this.className = (this.swap++ % 2) ? 'baddie flip' : 'baddie';
    });

    /**
     * Flipx2
     */
    t2.onclick = (function () {
        this.className = (this.swap++ % 2) ? 'baddie flipx2' : 'baddie';
    });

    /**
     * Half size
     */
    t3.onclick = (function () {
        this.className = (this.swap++ % 2) ? 'baddie half-size' : 'baddie';
    });

    /**
     * Double size
     */
    t4.onclick = (function () {
        this.className = (this.swap++ % 2) ? 'baddie double-size' : 'baddie';
    });

    /**
     * Skew horisontal
     */
    t5.onclick = (function () {
        this.className = (this.swap++ % 2) ? 'baddie skew-horisontal' : 'baddie';
    });

    /**
     * Skew vertical
     */
    t6.onclick = (function () {
        this.className = (this.swap++ % 2) ? 'baddie skew-vertical' : 'baddie';
    });

    /**
     * Move
     */
    t7.onclick = (function () {
        this.className = (this.swap++ % 2) ? 'baddie move' : 'baddie';
    });

    /**
     * Move-flip
     */
    t8.onclick = (function () {
        this.className = (this.swap++ % 2) ? 'baddie move-flip' : 'baddie';
    });

    /**
     * UBER
     */
    t9.onclick = (function () {
        this.className = (this.swap++ % 2) ? 'baddie uber' : 'baddie';
    });

});