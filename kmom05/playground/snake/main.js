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
    this.arr = [];
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

    collision: function(width, height, headX, headY) {
        // wall Collision
        if (this.headX >= width / this.size || this.headX <= -1 || this.headY >= height / this.size || this.headY <= -1) {
            // GAME OVER
            console.log("GAME OVER...");
        }
    },

    directions: function(headX, headY) {
        // DIRECTIONS
        var headX = this.arr[0].x;
            headY = this.arr[0].y;

        if (this.direction === 'right') {
            headX++;
        } else if (this.direction === 'left') {
            headX--;
        } else if (this.direction === 'up') {
            headY--;
        } else if (this.direction === 'down') {
            headY++;
        }
    },

    update: function(td, width, height, headX, headY) {



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
        tail.x = headX;
        tail.y = headY;
        this.arr.unshift(tail); // unshift adds new items to the beginning of the array.

        /*// wall Collision
        if (headX >= width / this.size || headX <= -1 || headY >= height / this.size || headY <= -1) {
            // GAME OVER
            console.log("GAME OVER...");
        }*/



    },

};



/**
 * The food for the snake..
 */
function Food(width) {
    this.size = 10;
    //this.x = Math.round(Math.random() * (width - this.size) / this.size);
    //this.y = Math.round(Math.random() * (width - this.size) / this.size);
    this.x = 1;
    this.y = 2;
    this.color = [
        'green',
        'blue',
        'red',
        'black',
        'yellow',
        'cyan',
        'salmon'
    ];
}

Food.prototype = {
    draw: function(ct) {
        //ct.fillStyle = this.randomColor();
        ct.fillStyle = "cyan";
        ct.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    },

    randomColor: function() {
        return this.color[Math.floor(Math.random() * (this.color.length))];
    }

};

function foodCollision(snake, food, headX, headY) {
    var tail;
    if (headX === food.x && headY === f.y) {
        food = new Food();
        tail = {x: headX, y: headY };
        snake.unshift(tail);

        //score += 10;

        //Increase speed
        if (speed <= 45) {
            speed++;
        }
    }
}

/*
function GameMessages() {
    this.messages = [
        "You broke your head!",
        "The wall is stronger than it seems!",
        "There's no way to escape the game...",
        "LOOK MA! NO HEAD..!!",
        "Can't see the wall? Huh?"
    ];
}*/

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
        score;

    var headX,
        headY;
    /**
     * Initializes the game
     */
    var init = function(canvas) {
        canvas = document.getElementById(canvas);
        ct = canvas.getContext('2d');
        width = canvas.width;
        height = canvas.height;

        snake = new Snake();
        headX = Snake.arr[0].x;
        headY = Snake.arr[0].y;
        food = new Food(width);

        console.log('init the game...');
    };

    /**
     * Updates the game
     */
    var update = function(td) {
        snake.update(td, width, height, headX, headY);
        snake.collision(width, height);
        snake.directions(headX, headY);
    };

    /**
     * Render
     */
    var render = function() {
        ct.clearRect(0, 0, width, height);
        snake.draw(ct);
        food.draw(ct);
    };

    /**
     * The Gameloop
     */
    var gameLoop = function() {
        var now = Date.now();
        td = (now - (lastGameTick || now)) / 10000;
        lastGameTick = now;
        requestAnimFrame(gameLoop);
        update(td);
        render();
    };

    return {
        'init': init,
        'gameLoop': gameLoop
    };
})();


$(document).ready(function () {
    'use strict';

    //var start = $("<h1 class='start'>GAME IS STARTING IN 3 SECONDS</h1>").insertBefore('#canvas');
    /*var audio = document.getElementById("audio1");
    audio.volume = 0.05;
    audio.play();*/

    /*var background = new Image();
    background.src = "img/black_mamba.jpg";
    context.drawImage(bark, -5, -50, 10, 50);*/

    /*setTimeout(function() {
        start.fadeOut('slow', function() {
            Snake.init('canvas');
            Snake.gameLoop();
        });
    }, 3000);*/
    SnakeTheGame.init('canvas');
    SnakeTheGame.gameLoop();
});