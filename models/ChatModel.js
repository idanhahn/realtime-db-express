var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ChatSchema = new Schema({
    recipientName : String,
    recipientId: String,
    sender: String,
    senderId: String,
    msg: String,
    time: Number
});

module.exports = mongoose.model("Chats", ChatSchema);
