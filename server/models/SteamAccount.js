const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const steamAccountSchema = new Schema({
  steamID: {
      type: String,
      required: false
  },
  games: [Game.schema],
  friends: [steamAccountSchema.schema]
});


const SteamAccount = mongoose.model('SteamAccount', steamAccountSchema);

module.exports = SteamAccount;
