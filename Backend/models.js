module.exports = function(mongoose) {
    var User = new mongoose.Schema({
        username:  String,
        password: String,
        full_name:   String,
        friends: [],
        tickets: [],
        sent_tickets: [],
    });
    
    var models = {
        User : mongoose.model('User', User)
    };
    return models;
}