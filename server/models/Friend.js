const mongoose = require('mongoose');

const { Schema } = mongoose;
const Game = require('./Game')


const friendSchema = new Schema({
  steamID: {
      type: String,
      required: false
  },
  games:[Game.schema]
});


const friend = mongoose.model('Friend', friendSchema);

module.exports = friend;
