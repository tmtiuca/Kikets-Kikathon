res = {}
req = {}
//Requiring Mongoose
var mongoose = require('mongoose')

//Connecting to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/myTestDB');
 
var db = mongoose.connection;
 
db.on('error', function (err) {
console.log('connection error', err);
});
db.once('open', function () {
//console.log('connected.');
});

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:  String,
  password: String,
  full_name:   String,
  friends: [String],
  user_tickets: [{
  	Title: String,
  	Content: String,
  	Status: Boolean,
  	Creation_User: String,
	}],
  assigned_tickets: [{
  	Title: String,
  	Content: String,
  	Status: Boolean,
  	Assigned_User: String,
	}],	
});



var User = mongoose.model('User', userSchema);

/*
var user_info = new User({
  username: 'Hugo',
  password: 'thisismypassword',
  full_name: 'Hugo Louis Seize',
  friends: ['Mihai', 'Misha', 'Rishab'],
});

user_info.save(function (err, data) {
if (err) console.log(err);
//else console.log('Saved : ', data );
});
*/

//Create finding if friends method

var IsFriend = function(req, res, friends_array, friend_name){
	for (var i=0; i < friends_array.length; i++){
		if (friend_name === friends_array[i]){
			return true;
		}
	}
	return false;
}

var CreateUser = function(req, res){
	var user_info = new User({
		username: req.body.username,
		password: req.body.password,
		full_name: req.body.full_name,
		friends: req.body.friends,
		user_tickets: req.body.user_tickets,
		assigned_tickets: req.body.assigned_tickets,
	})

	user_info.save(function (err, data) {
		if (err) console.log(err);
		});

	res.json(user_info);
	return true;

}

var Create_User

friend_name = process.argv[2];
console.log(friend_name);
console.log(IsFriend(user_info.friends, friend_name));
