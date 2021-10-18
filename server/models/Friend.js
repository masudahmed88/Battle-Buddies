const mongoose = require('mongoose');
const Game = require('./Game')
const { Schema } = mongoose;


const friendSchema = new Schema({
  steamID: {
      type: String,
      required: false
  },
  profileName:{
      type: String,
      required: false
  },
  name:{
      type: String,
      required: false
  },
  games:[Game.schema]
});


const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;
