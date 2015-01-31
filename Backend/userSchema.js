'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define the userSchema
var userSchema = new Schema({
  username:  String,
  password: String,
  full_name:   String,
  friends: [],
  user_tickets: [],
  assigned_tickets: [],	
});

// Export the User model
exports.User = mongoose.model('User', userSchema);