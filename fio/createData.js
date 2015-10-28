var fs = require('graceful-fs');

var args = process.argv.slice(2);
var numFiles = args[0] || 1;

for (var i=1; i <= numFiles; i++) {
	var data = i.toString();
	fs.writeFile('data/' + i.toString() + '.data', data, function(err) {
		if (err) {
			throw err;
		}
	});
}
