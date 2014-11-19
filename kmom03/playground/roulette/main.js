$(document).ready(function () {
    'use strict';
    /*jslint browser: true*/

    var button      = document.getElementById('roll'),
        log         = document.getElementById('log'),
        table       = document.getElementById('table'),
        bankroll    = document.getElementById('bankroll'),
        color       = document.getElementById('colors'),
        bet         = document.getElementById('bet');

    console.log('Starting');

    function random (min, max) {
        return Math.floor(Math.random()*(max-min)+min);
    }

    function spinWheel(n) {
        var i, res = [];
        n = n || 1; // Instead of default params

        for (i = 0; i < n; i++) {
            res[i] = random(0, 36);
        }
        return res;
    }

    function getColor(index) {
        var table   = [0,2,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2],
            colors  = ['green', 'black', 'red'];
        return colors[table[index]];
    }

    function print(element, string) {
        var p = document.createElement('p');
        p.innerHTML = string;
        return element.insertBefore(p, element.firstChild);
    }


    function createRouletteTable() {
        var i, el;

        for (i = 0; i <= 36; i++) {
            el = document.createElement('div');
            el.innerHTML = i;
            el.className = 'number ' + getColor(i);
            el.id = 'n' + i;
            table.appendChild(el);
        }
    }

    function clearRouletteTable () {
        var i, el;
        for(i = 0; i <= 36; i++) {
            el = document.getElementById('n' + i);
            el.className = 'number ' + getColor(i);
        }
    }


    button.addEventListener('click', function (event) {
        event.preventDefault();

	    var current = print(log, '&ndash; Bet is ' + bet.value + ' spinning the wheel&hellip;'),
            times = 10, results, step = 0, animateSpin;

        animateSpin = function () {
            var number, winColor, betColor;

            number = document.getElementById('n' + results[step]);
            number.className += ' selected';

            if (step > 0) {
                number = document.getElementById('n' + (results[step-1]));
                number.className = 'number ' + getColor(results[step-1]);
            }

            step += 1;

            if (step < times) {
                window.setTimeout(animateSpin, 100);
            } else {
                winColor = getColor(results[step-1]);
                betColor = color.value;
                current.innerHTML += ' Stopped at: ' + results[step-1] + ' ' + winColor;

                if (winColor === betColor) {
                    current.innerHTML += '. You won ' + (parseInt(bet.value, 10) * 2) + '.';
                    bankroll.value = parseInt(bankroll.value, 10) + parseInt(bet.value, 10) * 2;
                } else {
                    current.innerHTML += '. You lost.';
                }
                console.log('Bankroll: ' + bankroll.value + ' Bet: ' + bet.value);
            }
        };

        clearRouletteTable();
        bankroll.value = parseInt(bankroll.value, 10) - parseInt(bet.value, 10);
        results = spinWheel(10);
        window.setTimeout(animateSpin, 100);
    }, false);


    createRouletteTable();
    print(log, 'Welcome to the roulette table');
    console.log('ready');

});
