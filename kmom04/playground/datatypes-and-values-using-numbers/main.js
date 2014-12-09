$(document).ready(function() {
    'use strict';
    var numbers = [1337, 13.37, 1.21e4, 1.12e-2, 0xfff00ff], // Our array with the values
        text = document.getElementById('text'), // Get the element
        rows = '',
        i,
        elem;

    // Change class on text
    text.className = 'teal';
    // change the innerHTML
    text.innerHTML = '<b>Numbers - Datatypes and values</b>';

    // Create THE table
    elem = document.createElement('table');


    for (i = 0; i < numbers.length; i++) {
        rows += '<th>' + numbers[i] + '</th>';
    }
    rows = '<tr><th>Function</th>' + rows + '</tr>';


    /**
     * Exponentialform
     */
    rows += '<tr><td>Exponentialform</td>';
    for (i = 0; i < numbers.length; i++) {
        rows += '<td>' + numbers[i].toExponential() + '</td>';
    }
    rows += '</tr>';

    /**
     * Fixed Form
     */
    rows += '<tr><td>Fixed form, three decimals</td>';
    for (i = 0; i < numbers.length; i++) {
        rows += '<td>' + numbers[i].toFixed(3) + '</td>';
    }
    rows += '</tr>';

    /**
     * Round to closest integer
     */
    rows += '<tr><td>Closest integer</td>';
    for (i = 0; i < numbers.length; i++) {
        rows += '<td>' + Math.round(numbers[i]) + '</td>';
    }
    rows += '</tr>';

    /**
     * Square root
     */
    rows += '<tr><td>Square root</td>';
    for (i = 0; i < numbers.length; i++) {
        rows += '<td>' + Math.sqrt(numbers[i]).toPrecision(5) + '</td>';
    }
    rows += '</tr>';

    /**
     * Sinus
     */
    rows += '<tr><td>Value for sinus</td>';
    for (i = 0; i < numbers.length; i++) {
        rows += '<td>' + Math.sin(numbers[i]).toPrecision(5) + '</td>';
    }
    rows += '</tr>';

    elem.innerHTML = rows;

    // Set the table to the parentElements child.
    text.parentElement.appendChild(elem);

    // Math values
    text.innerHTML += '<p>Eulers const E: ' + Math.E + '</p>';
    text.innerHTML += '<p>PI: ' + Math.PI + '</p>';
    text.innerHTML += '<p>Largest: ' + Number.MAX_VALUE + '</p>';
    text.innerHTML += '<p>Positive Infinity: ' + Number.POSITIVE_INFINITY + '</p>';
});

