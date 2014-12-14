$(document).ready(function () {
    'use strict';

    var canvas = document.getElementById('canvas1'),
        ct = canvas.getContext('2d');


    // DRAW BOXES
    ct.fillStyle = 'salmon';
    ct.fillRect(200, 100, 100, 100);

    ct.fillStyle = 'cyan';
    ct.fillRect(50, 150, 150, 100);

    ct.lineWidth = 10;
    ct.strokeStyle = 'hsla(90,100%,50%,0.5)';
    ct.strokeRect(400, 100, 200, 100);

    // Draw a path line
    /*ct.save();*/

    ct.translate(0, 0);
    ct.beginPath();
    ct.moveTo(0, 0);
    ct.lineTo(10, 50);
    ct.lineWidth = 50;
    ct.stroke();

    // Draw complex path
    ct.save();
    ct.translate(800,300);
    ct.fillStyle = 'hsla(0,0%,30%,1)';
    ct.strokeStyle = 'hsla(0,0%,50%,1)';
    ct.lineWidth = 2;
    ct.beginPath();
    ct.moveTo(0,0);
    ct.lineTo(0,10);
    ct.lineTo(30,10);
    ct.lineTo(30,0);
    ct.lineTo(25,-5);
    ct.lineTo(5,-5);
    ct.lineTo(0,0);
    ct.fill();

    ct.lineWidth = 3;
    ct.beginPath();
    ct.moveTo(15,-5);
    ct.lineTo(15,-25);
    ct.stroke();
    ct.restore();

    ct.translate(50,200);
    ct.strokeStyle = 'hsla(0,50%,50%,1)';
    ct.beginPath();
    //ct.moveTo(0,0);
    ct.arc(0,0,20,-Math.PI/2,Math.PI/2,false);
    ct.arc(75,75,50,0,Math.PI/2,true);
    ct.stroke();
});