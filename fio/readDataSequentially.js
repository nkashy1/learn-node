var fs = require('graceful-fs');

var dataPath = 'data/';
function onReadDir(err, files) {
	if (err) {
		throw err;
	}

	readTillEnd(null, files, null);
}

var allData = [];
function readTillEnd(err, files, data) {
	if (err) {
		throw err;
	}

	if (data) {
		allData.push(data.toString());
	}

	var currentFile = files.shift();
	if (currentFile) {
		fs.readFile(dataPath + currentFile, function(err, data) {
			readTillEnd(err, files, data);
		});
	} else {
		console.log('Finished:');
		console.log(allData);
		console.log('Files read: ', allData.length)
	}
}

fs.readdir(dataPath, onReadDir);
