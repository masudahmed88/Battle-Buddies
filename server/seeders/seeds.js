const db = require("../config/connection.js");
const { User, SteamAccount, Game } = require("../models");

// const gameSeedData = require("./steamGames.json");

db.once("open", async () => {
  const games = await Game.insertMany([
    {
      appid: "1",
      gameName: "Back 4 Blood",
      image: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/back4blood_rlzx2c.jpg",
    },
    {
      appid: "2",
      gameName: "The Jackbox Party Pack 8",
      image:
        "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/jackboxpartypack8_elgar8.jpg",
    },
    {
      appid: "3",
      gameName: "Disco Elysium",
      image: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/disco_gvxvml.jpg",
    },
    {
      appid: "4",
      gameName: "Halo The Master Chief Collection",
      image:
        "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/halomastercheif_uqiy3n.jpg",
    },
    {
      appid: "5",
      gameName: "Ori and the Will of the Wisps ",
      image: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/disco_gvxvml.jpg",
    },
    {
      appid: "6",
      gameName: "Bubble People",
      image:
        "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/bubblepeople_szkgv8.jpg",
    },
    {
      appid: "7",
      gameName: "Baldur's Gate",
      image: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/baldursgate_nnrylo.jpg",
    },
    {
      appid: "8",
      gameName: "Rust",
      image: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/rust_fr6flb.jpg",
    },
    {
      appid: "9",
      gameName: "New World",
      image: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525506/newworld_y1kvqv.jpg",
    },
    {
      appid: "10",
      gameName: "Rebel Inc Escalation",
      image: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525506/rebelinc_udbgwz.jpg",
    },
    {
      appid: "11",
      gameName: "The Rift Breaker",
      image: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525506/riftbreaker_wueurs.jpg",
    },
    {
      appid: "12",
      gameName: "Phasmophobia",
      image: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525506/phasmo_hrbsyg.jpg",
    },
  ]);

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    steamID: "76561197960435530",
    isPremium: true,
    games: [games[1].appid, games[3].appid, games[8].appid, games[12].appid, games[5].appid],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
    steamID: "76561197960435530",
    isPremium: true,
    games: [games[1].appid, games[3].appid, games[8].appid, games[12].appid, games[5].appid],
  });

  console.log("users seeded");

  console.log("games seeded");

  process.exit();
});
