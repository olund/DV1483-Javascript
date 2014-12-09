window.onload = (function () {
    'use strict';

    var BoulderDash = {};

    var area        = document.getElementById('flash'),
        baddie      = document.getElementById('baddie1'),
        posX        = 1,
        posY        = 1,
        posLeft     = 0,
        posTop      = 0,
        tileSize    = 32,
        gridSize    = 24,
        gameArea    = [],
        tiles = {
            grass: 't12',
            red: 'b19',
            ice: 'b14',
            door: 'b17'
        };

    /**
     * Init gameArea (2D array) and build the "maze"
     * @return {[type]} [description]
     */
    function init() {
        var x, y, element, count = 0;
        for (x = 0; x < gridSize; x++) {
            gameArea[x] = [];

            if (x % 2 === 0) {
                count++;
            }

            for(y = 0; y < gridSize; y++) {
                // Border with iceblocks
                if (x === 0 || x === 23 || y === 0 || y === 23) {
                    gameArea[x][y] = tiles.ice;
                } else if (x % 2 === 0 && x !== 0) {

                    // MAZE OF DOOM (inspired from wc3 wintermaul one)
                    if (count % 2 === 0 && y < 22) {
                        gameArea[x][y] = tiles.red;
                    } else if (count % 2 === 1 && y > 1) {
                        gameArea[x][y] = tiles.red;
                    } else {
                        gameArea[x][y] = tiles.grass;
                    }

                } else if (x === 22 && y === 23) { // AKSDLÖAJKSDLÖKASLÖDKLÖASKD
                    gameArea[x][y] = tiles.door;
                } else {
                    gameArea[x][y] = tiles.grass;
                }

                elementTiles(x, y);
            }
        }
    }

    /**
     * Create element (divs) with tiles
     * @param  int x
     * @param  int y
     */
    function elementTiles(x, y) {
        var element = document.createElement('div');
        element.innerHTML = '';
        element.className = 'tile ' + gameArea[x][y];
        element.id = 'n' + x + '-' + y;
        area.appendChild(element);
    }

    /**
     * Dump the gameArea
     * @return {[type]} [description]
     */
    BoulderDash.dump = function() {
        var x, y;
        for (x = 0; x < gameArea.length; x++) {
            for (y = 0; y < gameArea.length; y++) {
                console.log(gameArea[x][y]);
            }
            console.log('\n');
        }
    };

    /**
     * Move the baddie
     */
    BoulderDash.move = function(x, y, which) {

        function moveIt() {
            baddie.style.left = (area.offsetLeft + posX * tileSize + tileSize / 2) + 'px';
            baddie.style.top = (area.offsetTop + posY * tileSize + tileSize / 2) + 'px';
        }

        if (which) {
            baddie.className = 'baddie ' + which;
        }

        // MY VERSION NOT WORKING
        //console.log(gameArea[x][y]);
        /*console.log('x: ' + x);
        console.log('y: ' + y);

        if (gameArea[x][y] === tiles.grass) {
            posX += x;
            posY += y;
            moveIt();
        } else {
            console.log('Block detected, cant move');
        }*/

        // KANSKE SKA ANÄVNDA  Olund.getOffset????+

        // OLD MOS VERSION
        if(gameArea[(posLeft + x) + (posTop + y) * gridSize] - 10) {
            console.log('Block detected, cant move.');
        } else {
            posLeft += x;
            posTop  += y;
            moveIt();
        }
    };


    document.onkeydown = function(event) {
        event.preventDefault();
        var key;
        key = event.keyCode || event.which;
        switch(key) {
            /*case 37: BoulderDash.move(posX, posY-1, 'left'); break;
            case 39: BoulderDash.move(posX, posY+1, 'right'); break;
            case 38: BoulderDash.move(posX-1, posY, 'up'); break;
            case 40: BoulderDash.move(posX+1, posY, 'down'); break;*/

            case 37: BoulderDash.move(-1, 0, 'left'); break;
            case 39: BoulderDash.move(1, 0, 'right'); break;
            case 38: BoulderDash.move(0, -1, 'up'); break;
            case 40: BoulderDash.move(0, 1, 'down'); break;
            default: BoulderDash.move(0, 0, 'down'); break;
        }
    };

    init();
    BoulderDash.move(1, 1, 'down');

    return BoulderDash;
})(window, document);