$(document).ready(function () {
    'use strict';
    /**
     * Variables
     */
    var i,
        str,
        rows = '',
        e1,
        literals = [13, 3.7, "hello world", 'trololo', true, false, null, undefined, /js/, {x: 1, y: 99}, ['array-item', 'item i en array'], function () {} ],
        element = document.getElementById('text');



    element.className = 'cyan';
    element.innerHTML = '<h2>Literals and indetifiers</h2>';
    e1 = document.createElement('ul');

    for (i = 0; i < literals.length; i++) {
        str = typeof literals[i] === 'string' ? '"' + literals[i] + '"' : literals[i];
        rows += '<li>' + str + ' &mdash; ' + typeof(literals[i]) + '</li>';
        console.log(typeof(literals[i])); // all the types..
    }

    e1.innerHTML = rows;

    element.parentElement.appendChild(e1);
});