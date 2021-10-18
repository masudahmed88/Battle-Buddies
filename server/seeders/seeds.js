const db = require("../config/connection.js");
const { User, SteamAccount, Game } = require("../models");

// const gameSeedData = require("./steamGames.json");

db.once("open", async () => {
  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    steamID: "76561197960435530",
    isPremium: true,
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
    steamID: "76561197960435530",
    isPremium: true,
  });

  console.log("users seeded");

  const games = await Game.insertMany([
    {
      appId: `01`,
      name: "Back 4 Blood",
      images: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/back4blood_rlzx2c.jpg",
    },
    {
      appId: `02`,
      name: "The Jackbox Party Pack 8",
      images:
        "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/jackboxpartypack8_elgar8.jpg",
    },
    {
      appId: `03`,
      name: "Disco Elysium",
      images: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/disco_gvxvml.jpg",
    },
    {
      appId: `04`,
      name: "Halo The Master Chief Collection",
      images:
        "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/halomastercheif_uqiy3n.jpg",
    },
    {
      appId: `05`,
      name: "Ori and the Will of the Wisps ",
      images: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/disco_gvxvml.jpg",
    },
    {
      appId: `06`,
      name: "Bubble People",
      images:
        "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/bubblepeople_szkgv8.jpg",
    },
    {
      appId: `07`,
      name: `Baldur's Gate`,
      images:
        "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/baldursgate_nnrylo.jpg",
    },
    {
      appId: `08`,
      name: "Rust",
      images: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525507/rust_fr6flb.jpg",
    },
    {
      appId: `09`,
      name: "New World",
      images: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525506/newworld_y1kvqv.jpg",
    },
    {
      appId: `10`,
      name: "Rebel Inc Escalation",
      images: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525506/rebelinc_udbgwz.jpg",
    },
    {
      appId: `11`,
      name: "The Rift Breaker",
      images:
        "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525506/riftbreaker_wueurs.jpg",
    },
    {
      appId: `12`,
      name: `Phasmophobia`,
      images: "https://res.cloudinary.com/dz9z8kntj/image/upload/v1634525506/phasmo_hrbsyg.jpg",
    },
  ]);

  console.log("games seeded");

  process.exit();
});
