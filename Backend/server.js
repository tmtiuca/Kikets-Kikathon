var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	functions = require('./functions.js'),
	mongoose = require('mongoose');

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/user', function (req, res) {
  	functions.createUser(req, res);
});
app.get('/user/:username', function (req, res) {
  	functions.findUser(req, res);
});

app.post('/addFriend', function (req, res) {
  	functions.addFriend(req, res);
});

app.post('/ticket/create', function (req, res) {
  	functions.createTicket(req, res);
});
app.post('/ticket/update', function (req, res) {
    functions.updateStatus(req, res);
});


var server = app.listen(3000, function () {

  	var host = server.address().address;
  	var port = server.address().port;

  	console.log('Example app listening at http://%s:%s', host, port);

});