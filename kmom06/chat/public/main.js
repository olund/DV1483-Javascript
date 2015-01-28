$(document).ready(function () {
    var socket = io(),
        msgBox = $('#m'),
        messages = $('#messages'),
        chat = $('.chat'),
        name = $('#name'),
        ready = false,
        userName = '';

    function chatCommand(cmd, arg) {
        console.log(cmd, arg);
        switch (cmd) {
            case 'nick':
                userName = arg;
                socket.emit('command', {
                    command: cmd,
                    nick: arg,
                });
            break;

            case 'me':
                socket.emit('command', {
                    command: cmd,
                    nick: userName,
                    arg: arg
                });
            break;

            default:
                // NOT A VALID MESSAGE.
                alert('Not a valid message');
        }
    }

    /* User JOIN */
    $('#name').keyup(function (event) {
        if (event.keyCode === 13) {
            userName = $(this).val();

            if (name !== '') {
                socket.emit('join', userName);
                ready = true;

                $('body').removeClass('black').addClass('darkgrey');
                $('.name').css('display', 'none');
                chat.css('display', 'initial');
            }
        }
    });



    $('form').submit(function (event) {
        var message = msgBox.val();
        if (message[0] === '/' && message.length > 1) {
            // Send command
            var command = message.match(/[a-z]+\b/)[0];
            var arg = message.substr(command.length+2, message.length);
            chatCommand(command, arg);

        } else {
            // Send chat message
            socket.emit('send', msgBox.val());
        }

        msgBox.val('');
        return false;
    });

    /* UPDATE */
    socket.on('update', function (message) {
        if(ready) {
            messages.append('<li>' + message + '</li>');
        }
    });

    /* UPDATE PEOPLE */
    socket.on('update-people', function (people) {
        if (ready) {
            $('#people').empty();
            $.each(people, function(clientid, name) {
                $('#people').append('<li>' + name + '</li>');
            });
        }
    });

    /* CHAT */
    socket.on('chat', function(obj){
        if(ready) {
            messages.append("<li>[" + obj.date + "] <strong><span class='text-success'>" + obj.who + "</span></strong>: " + obj.message + "</li>");
        }
    });

    // User disconnects.
    socket.on('disconnect', function (message) {
        messages.append($('<li>').text(message));
    });

});
