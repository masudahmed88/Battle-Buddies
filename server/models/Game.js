const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
    appid: {
      type: String,
      required: true
    },
    gameName: {
      type: String,
      required: true
    },
    description:{
      type: String,
      required: false
    },
    imgUrl:{
      type: String,
      required: false
    },
    rating:{
      type: String,
      required: false
    }
});
const Game = mongoose.model('Game', gameSchema);

module.exports = Game;


