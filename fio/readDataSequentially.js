var fs = require('graceful-fs');

var dataPath = 'data/';
var files = fs.readdirSync(dataPath);
var allData = files.map(function(file) {
	return fs.readFileSync(dataPath + file).toString();
})

console.log('Finished:');
console.log(allData);
console.log('Files read: ', allData.length);