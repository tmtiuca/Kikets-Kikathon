var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cors = require('cors');

app.use(cors());
bodyParser.json();
bodyParser.urlencoded();


app.post('/user', function (req, res) {
  // create user
  res.status(203);
  res.send('hello');
});
app.get('/user/info', function (req, res) {
  // gets user info
  var test = {
  	'1': 'hello',
  	'2': 'hello',
  	'3': 'hello',
  	'4': 'hello'
  };
  res.json(test);
});

app.post('/addFriend', function (req, res) {
  // add a friend
});

app.post('/ticket/make', function (req, res) {
  // create a ticket
});
app.post('/ticket/done', function (req, res) {
  // mark a ticket as done
});
app.post('/ticket/cancel', function (req, res) {
  // mark a ticket as cancelled
});



var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});