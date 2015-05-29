//js/backbone/models/card.js

var app = app || {};

app.Card = Backbone.Model.extend({
    defaults: {
        name: 'No name',
        cost: 0,
        used: false
    },
    
});