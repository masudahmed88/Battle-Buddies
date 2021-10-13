const db = require('../config/connection.js');
const { User, SteamAccount, Game } = require('../models');

const gameSeedData  =require('./steamGames.json');

db.once('open', async () => {

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    steamID: '76561197960435530',
    isPremium: true
    
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    steamID: '76561197960435530',
    isPremium: true
  });
    
  console.log('users seeded');

  process.exit();
});
