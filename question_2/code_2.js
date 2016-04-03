var fs = require('fs');

// helper functions
var keywordToFind = 'TCP';

fs.readFile('./input.txt', 'utf8', function(err,data) {
	if (err) {
		return console.log('file not found');
	}
	//console.log(data);

	// fake map reduce calls
	var lines = data.split('\n');
	var all = [];
	for (var i=0;i<lines.length;i++) {
		all = all.concat(map(lines[i]));
	}
	var result = reduce(all);
	//All the words calculated in this txt file
	//console.log(result);

	for (key in result){
		if (key == keywordToFind){
			console.log("There are " + result[key] + " \"" + keywordToFind + "\"s in this txt.");
		}
	}
});

// *** Start your code here *** //

function map(value) {
	var words = value.split(/\W+/);
	var temp = [];
	for(var i=0; i<words.length; i++){
		temp.push({key: words[i], value:1});
	}
	return temp;
}

function reduce(values) {
	var result = {};
	for(var i=0; i<values.length; i++){
		var value = values[i];
		result[value.key] = result[value.key] ? (result[value.key] + 1) : 1;
	}
	return result;
}

// *** End your code here *** //
