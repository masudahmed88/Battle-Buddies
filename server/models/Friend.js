const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const friendSchema = new Schema({
  steamID: {
      type: String,
      required: false
  }

});


const SteamAccount = mongoose.model('Friend', friendSchema);

module.exports = SteamAccount;
