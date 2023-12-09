const randomAchievements = require("./randomAchievements");
const randomDate = require("./randomDate");
const randomGender = require("./randomGender");
const objectId = require("./randomObjectId");
const randomPrice = require("./randomPrice");
const randomSpecie = require("./randomSpecie");
const crypto = require("crypto");
const randomTypeBird = require("./randomTypeBird");
const specieIdToName = require("./speciedIdToName");
const randomBreedPrice = require("./randomBreedPrice");
const birdImages = require("./birdImages.json");

const randomImage = (specieId) => {
  const imageUrls = birdImages.find((item) => item[specieId] !== undefined)[
    specieId
  ];

  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

const randomBird = () => {
  const bird = {
    _id: {
      $oid: String(objectId()),
    },
    birth: {
      $date: String(randomDate()),
    },
    type: String(randomTypeBird()),
    sold: false,
    breeding: false,
    sellPrice: randomPrice(),
    breedPrice: randomBreedPrice(),
    specie: randomSpecie(),
    gender: String(randomGender()),
    achievements: randomAchievements(),
    createdAt: new Date(),
    __v: 0,
  };

  bird.imageUrls = [randomImage(bird.specie.$oid)];
  bird.name =
    specieIdToName[bird.specie.$oid] +
    " mã " +
    crypto.randomBytes(3).toString("hex");

  if (bird.type === "sell") {
    delete bird.breedPrice;
    delete bird.breeding;
  }
  if (bird.type === "breed") {
    delete bird.sold;
    delete bird.sellPrice;
  }

  return bird;
};

module.exports = randomBird;
