$(document).ready(function () {
    'use strict';

    /**
    * Check if a creditcard number is valid.
    *
    * Source from http://onesandzeros.biz/notebook/ccvalidation.php
    *
    * Try the following numbers, they should be valid according to the check:
    * 4408 0412 3456 7893
    * 4417 1234 5678 9113
    */
    var isValidCCNumber = function ( ccNum ) {
        var cardNum = new String( ccNum );
        var digitsOnly = "";
        // Filter out non-digit characters
        for( var i = 0; i < cardNum.length; i++ ) {
            if( "0123456789".indexOf( cardNum.charAt( i ) ) > -1 ) {
                digitsOnly += cardNum.charAt( i );
            }
        }
        // Perform Luhn check
        var sum = 0;
        var digit = 0;
        var addend = 0;
        var timesTwo = false;
        for( var i = digitsOnly.length - 1; i >= 0; i-- ) {
            digit = parseInt( digitsOnly.charAt( i ) );
            if( timesTwo ) {
                addend = digit * 2;
                if( addend > 9 ) {
                    addend -= 9;
                }
            } else {
                addend = digit;
            }
            sum += addend;
            timesTwo = !timesTwo;
        }

        return sum % 10 == 0;
    };


    var Checkout = {
        /**
         * Init
         * @param  {[type]} config [description]
         * @return {[type]}        [description]
         */
        init: function(config) {
            this.config = config;
            this.bindEvents();

            $.ajaxSetup({
                url: 'checkout.php',
                type: 'POST',
                dataType: 'json'
            });

            this.getCart();
        },

        /**
         * Bind all the events.
         */
        bindEvents: function() {
            this.config.form.on('submit', this.buy);
        },

        getCart: function() {
            var self = Checkout;
            return $.ajax({
                url: 'checkout.php?action=sum'
            }).done(function(data) {
                self.config.sum.html(data.sum);
                self.config.nrOfItems.html('<b>' + data.numitems + '</b>');
            }).fail(function(jqXHR, textStatus, errorThrown) {
                console.log('Ajax request failed: ' + textStatus + ', ' + errorThrown);
            });
        },

        buy: function(event) {
            var self = Checkout;
            var formData = self.config.form.serialize();

            $('#output')
                .removeClass()
                .addClass('working').
                    html('<img src="http://dbwebb.se/img/loader.gif"/> <p>Doing payment.... IF you are stupid you can refresh the page, otherwise dont pls.</p>');

            // Ajax magic.
            $.ajax({
                url: 'checkout.php?action=pay',
                data: formData
            }).done(function(data) {
                var errors = '';
                $.each(data.errors || [], function(index, error) {
                    errors += '<p>' + error.label + ' ' + error.message + '</p>';
                });

                $('#output')
                    .removeClass()
                    .addClass(data.outputClass)
                    .html('<p>' + data.output + '</p>' + errors);

                // Clear the cart after a buy
                if (errors === '') {
                    self.emptyCart();
                }


                console.log('Ajax request returned successfully. ', data);

            }).fail(function(jqXHR, textStatus, errorThrown) {
                console.log('Ajax request failed: ' + textStatus + ', ' + errorThrown);
            });

            event.preventDefault();
        },

        emptyCart: function() {
            var self = Checkout;

            $.ajax({
                url: '../shopping-cart/shop.php?action=clear',
            }).done(function(data) {
                console.log(data);
                self.config.sum.html(data.sum);
                self.config.nrOfItems.html('<b>0</b>');
            }).fail(function(jqXHR, textStatus, errorThrown ) {
                console.log("clearCart failed... ", textStatus, errorThrown);
            });
        }

    };

    Checkout.init({
        sum: $('#sum'),
        nrOfItems: $('#nrOfItems'),
        form: $('#form1')
    });
});