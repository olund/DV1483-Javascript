$(document).ready(function () {
    'use strict';

    helloWorld();
    helloMyNumber();
});

function helloWorld() {
    console.log('called function hellWorld()');
    alert('Hello world');
}
function helloMyNumber() {
  console.log('called function helloMyNumber()');
  var max = 42;
  var yourLuckyNumber = prompt('So, whats your lucky number today (enter a number between 1 and '+max+')?');
  var myLuckyNumber = Math.floor(Math.random()*(max+1));
  var paragraph = document.getElementById('luckynumber');
  paragraph.innerHTML = paragraph.innerHTML + ' Your\'e lucky number is: ' + yourLuckyNumber + '. Mine is: ' + myLuckyNumber + '. They did ' + (yourLuckyNumber == myLuckyNumber ? 'indeed ' : 'NOT ') + 'match!';
}