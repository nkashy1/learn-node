var fs = require('graceful-fs');

var dataPath = 'data/', numFiles;
function onReadDir(err, files) {
	if (err) {
		throw err;
	}

	numFiles = files.length;
	readData(files);
}

var allData = [];
function onReadFile(err, data) {
	if (err) {
		throw err;
	}

	allData.push(data.toString());
	numFiles--;
	if (numFiles == 0) {
		console.log("Finished:");
		console.log(allData);
		console.log("Files read: ", allData.length)
	}
}

function readData(files) {
	files.forEach(function(file) {
		fs.readFile(dataPath + file, onReadFile);
	});
}

fs.readdir(dataPath, onReadDir);