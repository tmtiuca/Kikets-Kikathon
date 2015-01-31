var mongoose = require('mongoose'),
	db = mongoose.connection,
	User = require('./userSchema.js');

db.on('error', console.error);
db.once('open', function() {

module.exports.IsFriend = function(req, res){
	User.findOne({'username': req.body.username}, function(err, user){
		for (var i=0; i < user.friends.length; i++){
			if (user.friends[i] === req.body.friend){

				return true;
			}
		}
		return false;
	});
};

var CreateUser = function(req, res){
	var newUser = new User({
		username: req.body.username,
		password: req.body.password,
		full_name: req.body.full_name,
		friends: req.body.friends,
		user_tickets: req.body.user_tickets,
		assigned_tickets: req.body.assigned_tickets
	});

	newUser.save(function (err, data) {
		if (err) console.log(err);
		res.status(401);
		res.send();
	});

	res.status(200);
	res.send();
};


});

mongoose.connect('mongodb://localhost/test/100');
