var express = require('express');
var ip = require('ip');

var app = new express();

app.get('/data', function(req, res){
var software = req.headers['user-agent'].split('(')[1].split(')')[0];

	console.log(req.headers);
		var data = {
		ipaddress: ip.address(),
		language: req.acceptsLanguages()[0],
		software: software
	};
	res.json(data);
});

app.listen(8000);