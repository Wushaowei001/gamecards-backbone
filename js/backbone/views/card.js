// js/backbone/views/card.js

var app = app || {};

app.cardView = Backbone.View.extend({
    tagName: 'div',
    className: 'col-xs-3 col-sm-3 col-md-3',
    template: _.template( $( '#cardTemplate' ).html() ),

    render: function() {

        this.$el.html( this.template( this.model.attributes ) );

        return this;
    },
    events: {
    	'click': 'attack',
    },
    attack: function(){
    	this.$el.children().addClass('attack');
    	attackMe = this.model.attributes.cost;
    	//console.log(app.cardsMe);
    	var flag = true;

    	if(app.laps!=4){
    
	    	attackComputer = app.cardsComputer[app.laps].cost;
	    	id=app.cardsComputer[app.laps].id;
	    	$('#'+id).find("div").addClass('see_card');

	    	app.laps = app.laps+1;
	    	console.log(app.laps);

	    	if(attackMe==attackComputer){
	    		$('#'+id).find("div").addClass('see_card');

	    		$('#'+id).addClass('opacity_0');
	    		$('#equal').removeClass('display_none');
		    	setTimeout(function(){
		    		$('#equal').addClass('display_none');
		    	}, 1500);
	    	}else if(attackMe<attackComputer){
	    		$('#'+id).addClass('opacity_0');
	    		this.$el.children().addClass('opacity_0');
	    		app.pointsComputer=app.pointsComputer+1;
	    		$('#pointsComputer').text(app.pointsComputer);
	    		$('#lost').removeClass('display_none');
		    	setTimeout(function(){
		    		$('#lost').addClass('display_none');
		    	}, 1500);
	    	}else{
	    		$('#'+id).addClass('opacity_0');
	    		app.pointsMe=app.pointsMe+1;
	    		$('#pointsMe').text(app.pointsMe);
	    		$('#win').removeClass('display_none');
		    	setTimeout(function(){
		    		$('#win').addClass('display_none');
		    	}, 1500);
	    	}
	    	this.$el.children().addClass('opacity_0');
	    	$('.turn').text(app.laps+1);
    	}
    	if(app.laps==4){
    		if(app.pointsMe==app.pointsComputer){
    			$('#message').text('EMPATASTE CONTRA LA PC');
    		}else if(app.pointsComputer>app.pointsMe){
    			$('#message').text('GANÓ LA PC EL JUEGO');
    		}else{
    			$('#message').text('GANASTE EL JUEGO');
    		}
    		$('#message').removeClass('display_none');
    	}

    }
});

app.cardViewComputer = Backbone.View.extend({
    tagName: 'div',
    className: 'col-xs-3 col-sm-3 col-md-3',
    template: _.template( $( '#cardTemplateComputer' ).html() ),

    render: function() {

        this.$el.html( this.template( this.model.attributes ) );

        return this;
    }
});