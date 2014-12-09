$(document).ready(function () {
    'use strict';

    // DEFFERED
    /*var myVar;
    var setVal = function() {
        var deferred = $.Deferred();

        setTimeout(function() {
            myVar = 'my value';
            deferred.reject();
            //deferred.resolve();
        }, 2000);

        return deferred.promise();
    };

    setVal().done(function() {
        console.log('all done ' + myVar);
    });

    setVal().fail(function() {
        console.log('all done ' + myVar);
    });

    setVal().always(function() {
        console.log('all done ' + myVar);
    });

    setVal().done(function() {
        console.log("all done");
    }).fail(function() {
        console.log("failed");
    });

    setVal().then(
        function() {
            console.log("all done");
        },
        function() {
            console.log("failed");
        }
    );*/
    /*
    $.searchTwitter = function(search) {
        return $.ajax({
            url: 'http://search.twitter.com/search.json',
            data: { q: search},
            dataType: 'jsonp',
        }).promise();
    };
    var outer = $.searchTwitter('cats');


    outer.then(function(results) {
        console.log(results);
    });

    // ... LATER ON

    outer.then(function(results) {
        console.log(results);
    });*/


    /*
    $.ajaxSetup({
        url: 'index.php',
        type: 'POST'
    });
    */

    /*var All = {
        bindEvent: function() {

        },

    };*/


    var success = function(data) {
        $('#output').html('<p>' + data.output + '</p>');
    };

    $('#doLogin').click(function(event) {
        $.ajax({
            type: 'POST',
            url: 'login.php?do=login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: success
        });
        // Set username value to empty.
        $('#username').val('');

        event.preventDefault();
    });

    $('#doLogout').click(function(event) {
        $.ajax({
            type: 'POST',
            url: 'login.php?do=logout',
            dataType: 'json',
            success: success,
            error: error,
        });

        event.preventDefault();
    });

    $('#status').click(function(event) {
        $.ajax({
            type: 'POST',
            url: 'login.php?do=status',
            dataType: 'json',
            success: success
        });

        console.log('Form submitted, lets wait for a response.');

        event.preventDefault();
    });
});