var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.UserModel = mongoose.model('User', new Schema({
    name: String,
    password: String,
    admin: Boolean
}));