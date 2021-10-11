const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const gameSchema = new Schema({
  gameName: {
    type: String,
    required: true
  },
  appID: {
      type: Number,
      required: true
  }
});
const Game = mongoose.model('Game', gameSchema);

module.exports = Game;


