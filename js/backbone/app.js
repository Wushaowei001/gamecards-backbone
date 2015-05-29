var app = app || {};

app.cardsMe = [];
app.cardsComputer = [];

app.pointsMe = 0;
app.pointsComputer = 0;
app.laps = 0;

$(function() {

    $.getJSON('AllSets.json', function(data){
    	var arrayCards = data.Classic;
    	var length = arrayCards.length;

    	i=1;
		

    	while(i<=4){
    		randNumber = Math.floor((Math.random() * length) + 1);
    		randNumberComputer = Math.floor((Math.random() * length) + 1);

    		//imageExists(imageURL);
    		if(arrayCards[randNumber].attack!=0){
    			app.cardsMe.push(arrayCards[randNumber]);
    			app.cardsComputer.push(arrayCards[randNumberComputer]);
    			i=i+1;
    		}
    		//console.log(arrayCards[randNumber]);
    	}

    	new app.cardsView( app.cardsMe );
    	new app.cardsViewComputer( app.cardsComputer );

    	//new app.cardsViewComputer(cards);
    });
    
});