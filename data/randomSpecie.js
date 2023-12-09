const species = require("./species.json");

const getRandomSpecie = () => {
  const index = Math.floor(Math.random() * species.length);
  return species.map((specie) => specie._id)[index];
};

module.exports = getRandomSpecie;
