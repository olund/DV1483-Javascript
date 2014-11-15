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



    myBall.HTMLelement.addEventListener('click', function(event) {
        console.log('Clicked on: ' + event.clientX + ' x ' + event.clientY);
        myBall.position.x = myBall.position.x + Olund.random(-100, 100);
        myBall.position.y = myBall.position.y + Olund.random(-100, 100);
        myBall.draw();
    });

    myBall.draw();

});