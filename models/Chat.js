const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const ChatSchema = new Schema({
  message: String,
  intent: String,
  sender: String,
  lang: String
},{timestamps: true});

// create the model
const ChatModel = mongoose.model('Chat', ChatSchema, "portfolio");

// export the model
module.exports = ChatModel;