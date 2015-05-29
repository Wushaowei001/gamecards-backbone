// js/backbone/views/cards.js

var app = app || {};

app.cardsView = Backbone.View.extend({
    el: '#player_me',

    initialize: function( initialCards ) {
        this.collection = new app.Cards( initialCards );
        this.render();
    },

    render: function() {
        this.collection.each(function( item ) {
            this.renderCard( item );
        }, this );
    },

    renderCard: function( item ) {
        var cardView = new app.cardView({
            model: item
        });
        this.$el.append( cardView.render().el );
    },
});


app.cardsViewComputer = Backbone.View.extend({
    el: '#player_computer',

    initialize: function( initialCards ) {
        this.collection = new app.Cards( initialCards );
        this.render();
    },

    render: function() {
        this.collection.each(function( item ) {
            this.renderCard( item );
        }, this );
    },

    renderCard: function( item ) {
        var cardView = new app.cardViewComputer({
            model: item
        });
        this.$el.append( cardView.render().el );
    }
});