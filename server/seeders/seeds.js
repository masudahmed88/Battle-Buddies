const db = require('./connection');
const { User, SteamAccount, Game } = require('../models');

const gameSeedData  =require('./steamGames.json');

db.once('open', async () => {


  await Game.deleteMany();

  const games = await Game.bulkCreate(gameSeedData);

  console.log('games seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    steamAccount: '76561197960435530',
    
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
    
  });

  await SteamAccount.create({ 
      steamID: '76561197960435530',
      games: [games[0].name, games[6].name, games[1].name]
    });
    
  console.log('users seeded');

  process.exit();
});
