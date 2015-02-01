var mongoose = require('mongoose'),
	db = mongoose.connection,
	 models = require('./models')(mongoose);

var createUser = function(req, res){
		var user = new models.User({
			username: req.body.username,
			password: req.body.password,
			full_name: req.body.full_name,
			friends: [],
			tickets: [],
			sent_tickets: []
		});

		user.save(function (err, data) {
			if (err){ 
				console.log(err);
				res.status(401);
				res.send();
				return true;
			}
		});

		res.status(200);
		res.send('User Created');
		return true;
	},
	findUser = function(req, res){
		models.User.findOne({'username': req.params.username}, function(err, user){
			if (err) {
				console.log(err);
				res.status(400);
				res.send();
				return false;
			};
			res.json(user);
			return true;
		});
	},
	checkLogin = function(req, res){
		models.User.findOne({'username': req.body.username}, function(err, user){
			if (err) {
				console.log(err);
				res.status(400);
				res.send();
				return false;
			};
			if (user.password === req.body.password) {
				res.status(200);
				res.send();
				return true;
			} else {
				res.status(400);
				res.send();
				return true;
			}
			return true;
		});
	},	
	createTicket = function(req, res){
		var date = new Date(),
			ticket = {
				title: req.body.title,
				content: req.body.content,
				creation_date: date.toUTCString(),
				status: 'notDone',
				creation_user: req.body.username,
				assigned_user: req.body.friend
			};

		models.User.findOne({'username': req.body.username}, function(err, user){
			if (err) {
				console.log(err);
				res.status(400);
				res.send();
				return false;
			};
			user.sent_tickets.push(ticket);

			user.save(function (err, data) {
				if (err){ 
					console.log(err);
					res.status(401);
					res.send();
					return true;
				}
			});
			return true;
		});

		models.User.findOne({'username': req.body.friend}, function(err, friend){
			if (err) {
				console.log(err);
				res.status(400);
				res.send();
				return false;
			};
			friend.tickets.push(ticket);

			friend.save(function (err, data) {
				if (err){ 
					console.log(err);
					res.status(401);
					res.send();
					return true;
				}
			});
			return true;
		});

		res.status(200);
		res.send('ticket created');
		return true;
	},
	updateStatus = function(req, res){
		models.User.findOne({'username': req.body.username}, function(err, user){
			for (var i = 0; i < user.tickets.length; i++){
				if (req.body.title === user.tickets[i].title){
					user.tickets[i].status = req.body.status;
					var tempTicket = user.tickets[i];
					user.tickets.splice(i,1);
					user.save(function (err, data) {
						if (err){ 
							console.log(err);
							res.status(401);
							res.send();
							return true;
						}
					});
					models.User.findOne({'username': tempTicket.creation_user}, function(err, user2){
						for (var k = 0; k < user2.sent_tickets.length; k++){
							if(user2.sent_tickets[k].title === tempTicket.title){
								user2.sent_tickets.splice(k,1);
								user2.save(function (err, data) {
									if (err){ 
										console.log(err);
										res.status(401);
										res.send();
										return true;
									}
								});
								user2.sent_tickets.push(tempTicket);
								user2.save(function (err, data) {
									if (err){ 
										console.log(err);
										res.status(401);
										res.send();
										return true;
									}
								});
								res.send('update');
								return true;
							}
						}
					});
				}
			}
		});
	},
	addFriend = function(req, res){
		models.User.findOne({'username': req.body.username}, function(err, user){
			for (var i = 0; i < user.friends.length; i++){
				if (req.body.friend === user.friends[i]){	
						res.status(401);
						res.send();
						return true;
					}
			}

			user.friends.push(req.body.friend);

			user.save(function (err, data) {
				if (err){ 
					console.log(err);
					res.status(401);
					res.send();
					return true;
				}
			});
						
			res.status(200);
			res.send('friend added');
			return true;
		});
	};

module.exports = {
	createUser:createUser,
	checkLogin:checkLogin,
	findUser:findUser,
	createTicket:createTicket,
	updateStatus:updateStatus,
	addFriend:addFriend
};

db.on('error', console.error);
db.once('open', function() { });

mongoose.connect('mongodb://localhost/test/14673224005');