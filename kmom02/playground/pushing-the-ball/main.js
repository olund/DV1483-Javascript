$(document).ready(function() {
    'use strict';


    var myBall = {
        image: 'http://dbwebb.se/img/black_ball_64_64.png',
        position: {x: 500, y: 100},
        dimension: {w: 64, h: 64},
        HTMLelement: document.getElementById('ball')
    };


    myBall.draw = function() {
        this.HTMLelement.style.backgroundImage = 'url(' + this.image + ')';
        this.HTMLelement.style.top = this.position.y + 'px';
        this.HTMLelement.style.left = this.position.x + 'px';
        console.log('Drawing ball.');
    };

    function collisionDetection() {
        var maxHeight = window.innerHeight,
            maxWidth = window.innerWidth,
            minHeight = 0,
            minWidth = 0;

        if (myBall.position.y <= minHeight) {
            myBall.position.y = 1;
            console.log("träffade top");
        }

        if (myBall.position.x <= minWidth) {
            myBall.position.x = 1;
            console.log("träffade left");
        }

        if (myBall.position.y >= maxHeight) {
            myBall.position.y = maxHeight-75;
            console.log("Träffade botten");
        }

        if (myBall.position.x >= maxWidth) {
            myBall.position.x = maxWidth-75;
            console.log("träffade höger");
        }
    }


    myBall.HTMLelement.addEventListener('click', function(event) {
        myBall.position.x = myBall.position.x + Olund.random(/*-1000*/0, 1000);
        myBall.position.y = myBall.position.y + Olund.random(/*-1000*/0, 1000);
        collisionDetection();
        myBall.draw();
    });

    myBall.draw();

});