$(document).ready(function(){
    'use strict';
    var target,
        area,
        moveIt,
        step,
        left,
        top;


    step = 64; // The badie is 64pixels so we move it by 64 each time.
    target = document.getElementById('b1');
    area = document.getElementById('flash');
    left = target.offsetLeft;
    top = target.offsetTop;

    /**
     * Move the baddie
     * @param  {[type]} moveLeft [description]
     * @param  {[type]} moveTop  [description]
     */
    moveIt = function(moveLeft, moveTop) {
        target.style.left = (target.offsetLeft + moveLeft) + 'px';
        target.style.top = (target.offsetTop + moveTop) + 'px';
    };

    // CSS transiotion is broken if i remove this, why is that?...
    moveIt(435,0);

    /**
     * On keydown event
     * @param  {[type]} event [description]
     */
    document.onkeydown = function(event) {
        var key;

        key = event.key || event.which;

        switch(key) {
            // Arrow left
            case 37:
                target.className = 'baddie left';
                moveIt(-step, 0);
            break;

            // Arrow up
            case 38:
                target.className = 'baddie up';
                moveIt(0, -step);
            break;

            // Arrow right
            case 39:
                target.className = 'baddie right';
                moveIt(step, 0);
            break;

            // Arrow down
            case 40:
                target.className = 'baddie down';
                moveIt(0, step)
            break;

            // b - Move the baddie to the background
            case 66:
                target.style.zIndex = -1;
            break;

            // f - Move the baddie to the front
            case 70:
                target.style.zIndex = 1;
            break;

            // h = home
            case 72:
                moveIt(left-target.offsetLeft, top-target.offsetTop);
            break;

            // space = jump
            case 32:
                moveIt(0, -step);
                // What jumps up, must come down, a bit later.
                setTimeout(function() {
                    moveIt(0, step);
                }, 300);
            break;

            // r = random
            case 82:
                moveIt(step * Math.floor(Math.random() * (3) - 1), step * Math.floor(Math.random() * (3) - 1));
            break;

            default:
                target.className = 'baddie down';
            break;
        }

        console.log('Keypress: ' + event + ' key: ' + key + ' new pos: ' + target.offsetLeft + ', ' + target.offsetTop);
    };

    area.onclick = function(event) {
        moveIt(event.clientX-target.offsetLeft-32, event.clientY-target.offsetTop-32);
        console.log('Clicked area.' + event + ' Moving baddie to mouse pointer position.');
    };
});