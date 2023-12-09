const randomAchievements = require("./randomAchievements");
const randomDate = require("./randomDate");
const randomGender = require("./randomGender");
const objectId = require("./randomObjectId");
const randomPrice = require("./randomPrice");
const randomSpecie = require("./randomSpecie");
const crypto = require("crypto");
const specieIdToName = require("./speciedIdToName");
const nestImages = require("./nestImages.json");

const randomImage = (specieId) => {
  const imageUrls = nestImages.find((item) => item[specieId] !== undefined)[
    specieId
  ];

  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

const randomNest = () => {
  const nest = {
    _id: {
      $oid: String(objectId()),
    },
    specie: randomSpecie(),
    name: crypto.randomBytes(3).toString("hex"),
    sold: false,
    price: randomPrice(),
    createdAt: new Date(),
  };

  nest.imageUrls = [randomImage(nest.specie.$oid)];
  nest.name =
    "Tổ " +
    specieIdToName[nest.specie.$oid] +
    " mã " +
    crypto.randomBytes(3).toString("hex");

  return nest;
};

module.exports = randomNest;
