var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send( generateTrains() );
});

app.listen(3000, function(){
	console.log("Accepting HTTP requests on port 3000");
});


function generateTrains(){
	var numberOfTrains = chance.integer({
		min:1,
		max:10
	});
	console.log(numberOfTrains);
	var trains = [];
	for (var i = 0; i < numberOfTrains; i++){
		var year = chance.year({
			min : 2016,
			max : 2020
		});
		var country = chance.country();
		trains.push({			
			street : chance.street({
				country : 'it'
			}),
			date : chance.date({
				year : year,
				string : true,
				american: false
			})
		});
	};
	console.log(trains);
	return trains;
}