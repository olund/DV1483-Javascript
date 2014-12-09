$(document).ready(function () {
    'use strict';
    var random,
        rollDice,
        i,
        text = document.getElementById('text');

    random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    rollDice = function (n) {
        var sum = 0, serie = '', value;
        for (i = 0; i < n; i++) {
            value = random(1, 6);
            sum += value;
            serie += value + ', ';
        }

        return "Average: " + (sum / n).toPrecision(2) + ' SERIE: ' + serie + '<br>';
    };

    text.innerHTML = '<h1>Dice - Functions in JS</h1>';
    text.className = 'black';

    text.innerHTML += '<b>Throw a serie of 10 with a dice</b>: ' + rollDice(6);
    text.innerHTML += '<b>Throw a serie of 20 with a dice: </b>' + rollDice(12);
    text.innerHTML += '<b>Throw a serie of 100 with a dice: </b>' + rollDice(100);

});