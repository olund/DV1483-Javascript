$(document).ready(function() {
    'use strict';


    var ShoppingCart = {
        init: function(config) {
            this.config = config;
            //this.setupTemplates();
            this.bindEvents();

            // Default ajax setup.
            $.ajaxSetup({
                url: 'shop.php',
                type: 'POST',
                dataType: 'json'
            });

            // Update the cart on page reload.
            this.getCart();
        },


        /*setupTemplates: function() {
            this.config.

            Handlebars.registerHelper('fullName', function(item) {
                return item.name + ' ' item.price;
            });
        },*/

        /*displayItems: function(event) {
            $.ajax({
                data: { item_id: $(this).data('actor_id') }
            }).done(function(results) {

            });
            event.preventDefault();
        },*/

        bindEvents: function() {
            this.config.purchase.on('click', this.addToCart);
            this.config.clear.on('click', this.clearCart);
        },

        getCart: function() {
            var self = ShoppingCart;
            $.ajax({
                type: 'GET',
            }).done(function(data) {
                self.updateCart(data);
            }).fail(function(jqXHR, textStatus, errorThrown ) {
                console.log("getCart failed... ", textStatus, errorThrown);
            });
        },

        addToCart: function() {
            var self = ShoppingCart,
            id = $(this).attr('id');

            $.ajax({
                url: 'shop.php?action=add',
                type: 'POST',
                dataType: 'JSON',
                data: { itemid: id }
            }).done(function(data) {
                self.updateCart(data);
            }).fail(function(jqXHR, textStatus, errorThrown ) {
                console.log("addToCart failed... ", textStatus, errorThrown);
            });
        },

        updateCart: function(data) {
            var self = ShoppingCart;
            this.config.nrOfItems.html(data.numitems);
            this.config.totalSum.html(data.sum);
            this.config.status.html('Updating..');
            this.config.content.html(data.content);

            setTimeout(function() {
                self.config.status.fadeOut(function() {
                    self.config.status.html('').fadeIn();
                });
            }, 1000);

            console.log("Shopping cart updated");
        },

        clearCart: function() {
            var self = ShoppingCart;
            $.ajax({
                url: 'shop.php?action=clear',
            }).done(function(data) {
                self.updateCart(data);
            }).fail(function(jqXHR, textStatus, errorThrown ) {
                console.log("clearCart failed... ", textStatus, errorThrown);
            });
        }

    };

    ShoppingCart.init({
        items_table_template: $('#items_table_template'),
        clear: $('#clear'),
        purchase: $('button.purchase'),
        content: $('#content'),
        nrOfItems: $('#numitems'),
        totalSum: $('span#sum'),
        status: $('span#status'),
    });

});