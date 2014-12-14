/*
    SNAKE
    @author Olund
 */
window.requestAnimFrame = (function () {
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                window.msRequestAnimationFrame     ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
}());


window.cancelRequestAnimFrame = (function () {
    return window.cancelRequestAnimationFrame ||
           window.webkitCancelRequestAnimationFrame ||
           window.mozCancelRequestAnimationFrame    ||
           window.oCancelRequestAnimationFrame      ||
           window.msCancelRequestAnimationFrame     ||
           window.clearTimeout;
}());


window.Key = {
    pressed: {},
    LEFT:   37,
    UP:     38,
    RIGHT:  39,
    DOWN:   40,

    isDown: function (keyCode, keyCode1) {
        return this.pressed[keyCode] || this.pressed[keyCode1];
    },

    onKeydown: function (event) {
        this.pressed[event.keyCode] = true;
    },

    onKeyup: function (event) {
        delete this.pressed[event.keyCode];
    }
};

window.addEventListener('keyup', function (event) {
    /*event.preventDefault();*/
    Key.onKeyup(event);
}, false);
window.addEventListener('keydown', function (event) {
    /*event.preventDefault();*/
    Key.onKeydown(event);
}, false);


/**
 * The snake
 */
function Snake() {
    this.size = 10;
    this.length = 10;
    this.score = 0;
    this.arr = [];
    this.life = 1;
    this.direction = 'right';

    for (var i = this.length - 1; i >= 0; i--) {
        this.arr.push({
            x: i,
            y: 0
        });
    }

    this.headX = this.arr[0].x;
    this.headY = this.arr[0].y;
}


Snake.prototype = {
    draw: function(ct) {
        var i;

        /* Loop through the array and fill the canvas with rectangles. */
        for (i = 0; i < this.arr.length; i++) {
            var s = this.arr[i];
            ct.fillStyle = "white";
            ct.fillRect(s.x * this.size, s.y * this.size, this.size, this.size);
        }

    },

    collision: function(width, height, food) {

        if (this.headX >= width / this.size || this.headX <= -1 || this.headY >= height / this.size || this.headY <= -1) {
            // wall Collision
            console.log("HIt the wall, game over");
            this.life--;
        }

        // Food collision
        if (this.headX === food.x && this.headY === food.y) {

            // Make the snake bigger
            var tail = {
                x: this.headX,
                y: this.headY
            };
            this.arr.unshift(tail);

            // Update score
            this.score += 10;
            document.getElementById('score').innerHTML = "Score: " + this.score;

            return 1;
        } else {
            // Collision between snake parts
            for (var i = 2; i < this.arr.length; i++) {
                var s = this.arr[i];
                if (this.headX === s.x && this.headY === s.y) {
                    console.log("HIT MYSELF, Game over!");
                    this.life--;
                }
            }
        }

        return 0;
    },

    directions: function() {
        if (this.direction === 'right') {
            this.headX++;
        } else if (this.direction === 'left') {
            this.headX--;
        } else if (this.direction === 'up') {
            this.headY--;
        } else if (this.direction === 'down') {
            this.headY++;
        }
    },

    update: function(td, width, height) {

        if (Key.isDown(Key.UP) && this.direction != 'down') {
            this.direction = 'up';
        }
        if (Key.isDown(Key.LEFT) && this.direction != 'right') {
            this.direction = 'left';
        }
        if (Key.isDown(Key.DOWN) && this.direction != 'up') {
            this.direction = 'down';
        }
        if (Key.isDown(Key.RIGHT) && this.direction != 'left') {
            this.direction = 'right';
        }

        // Move the snake
        var tail = this.arr.pop();
        tail.x = this.headX;
        tail.y = this.headY;
        this.arr.unshift(tail); // unshift adds new items to the beginning of the array.

    },

};



/**
 * The food for the snake..
 */
function Food(width, height) {
    this.size = 10;
    this.x = Math.round(Math.random() * (width - this.size) / this.size);
    this.y = Math.round(Math.random() * (height - this.size) / this.size);

    this.color = [
        'green',
        'blue',
        'red',
        'pink',
        'yellow',
        'cyan',
        'salmon'
    ];
}

Food.prototype = {
    draw: function(ct) {
        ct.fillStyle = this.randomColor();
        /*ct.fillStyle = "cyan";*/
        ct.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    },

    randomColor: function() {
        return this.color[Math.floor(Math.random() * (this.color.length))];
    }

};

/**
 * Snake, the Game
 */
window.SnakeTheGame = (function(){
    var canvas,
        ct,
        snake,
        food,
        lastGameTick,
        width,
        height,
        speed,
        score,
        background;

    /**
     * Initializes the game
     */
    var init = function(canvas) {
        canvas = document.getElementById(canvas);
        ct = canvas.getContext('2d');
        width = canvas.width;
        height = canvas.height;
        snake = new Snake();
        food = new Food(width, height);
        console.log('init the game...');
    };

    /**
     * Updates the game
     */
    var update = function(td) {
        snake.update(td, width, height);
        var moar = snake.collision(width, height, food);
        snake.directions();
        if (moar > 0) {
            // Create new food
            food = new Food(width, height);
        }
    };

    /**
     * Render
     */
    var render = function() {
        if (snake.life > 0) {
            ct.clearRect(0, 0, width, height);
            snake.draw(ct);
            food.draw(ct);
        } else {
            ct.font = "40px Raleway";
            ct.fillStyle = "#F44336";
            var score = document.getElementById('score').innerHTML;
            ct.fillText("GAME OVER! SCORE: " + score, 200, 200);
            var audio = document.getElementById("audio1");
            audio.pause();
        }

    };

    /**
     * The Gameloop
     */
    var gameLoop = function() {
        var now = Date.now();
        td = (now - (lastGameTick || now)) / 10000;
        lastGameTick = now;
        setTimeout(function() {
            requestAnimFrame(gameLoop);
            update(td);
            render();
        }, 20);


    };

    return {
        'init': init,
        'gameLoop': gameLoop
    };
})();


$(document).ready(function () {
    'use strict';

    var start = $("<h1 class='start'>GAME IS STARTING IN 2 SECONDS</h1>").insertBefore('#canvas');
    var audio = document.getElementById("audio1");
    audio.volume = 0.05;
    audio.play();



    setTimeout(function() {
        start.fadeOut('slow', function() {
            SnakeTheGame.init('canvas');
            SnakeTheGame.gameLoop();
        });
    }, 2000);

    $('#restart').on('click', function() {
        location.reload();
    });
});