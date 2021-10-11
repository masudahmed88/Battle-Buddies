const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const gameSchema = new Schema({
    name: {
    type: String,
    required: true
  },
    appid: {
      type: Number,
      required: true
  }
});
const Game = mongoose.model('Game', gameSchema);

module.exports = Game;


