mongoimport -d projectDB -c collection --type csv --file Users/bonlemuel/Documents/THESIS/MASTERS/REPOSITORY/sql-benchmarking/2007.csv --headerline;


var map = function() {
	var carrier= this.UniqueCarrier;
	var arrDelay= this.ArrDelay;
	
	emit({ carrier: carrier },
		{ arrDelay: arrDelay});
}

var reduce = function(key, values) {
	var totalLateDelay = 0;
	for(var i = 0; i < values.length; i++) {
		if (values[i].arrDelay>15)
		totalLateDelay += values[i].arrDelay;
	}
	return {
		totalLateDelay: totalLateDelay
	}
}

db.collection.mapReduce(
	map,
	reduce,
	{ out: "map_reduce_example" }
).find();

db.stocks.mapReduce(
	mapping1,
	reducing1,
	{
		out : "Results"
	}
 );

 db.Results.find();
