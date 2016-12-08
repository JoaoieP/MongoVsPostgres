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