const fs = require("fs");
var json = JSON.parse(fs.readFileSync("repos", "utf-8"));

console.log("#!/bin/bash");
console.log("cd " + process.argv[3]);
json.forEach(function(name) {
	const cmd = "git clone https://github.com/" + process.argv[2] + "/" + name;
	console.log(cmd);
});
