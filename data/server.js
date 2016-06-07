var express = require('express');
var http = require('http');
var app = express();
var path = require('path');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname));

//endorsements data
app.get('/endorsements', function(req, res) {
	res.sendFile(path.join(__dirname,'endorsement_data.json'));
});

//intro data
app.get('/intro', function(req, res) {
	res.sendFile(path.join(__dirname,'intro_data.json'));
});


//starts the server listening
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

