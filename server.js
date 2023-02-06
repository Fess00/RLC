const express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.sendFile('/usr/rlcserver/RLC/index.html');
});

app.listen(8080);

console.log('Started');
