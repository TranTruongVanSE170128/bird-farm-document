function randomRank() {
  const random = Math.floor(Math.random() * (5 - 1 + 1));
  return parseInt(random + 1);
}

module.exports = randomRank;
