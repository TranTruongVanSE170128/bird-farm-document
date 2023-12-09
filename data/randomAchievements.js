const randomRank = require("./randomRank");

function randomCompetition() {
  const competitions = [
    "Chim đẹp nhất",
    "Chim hót hay nhất",
    "Chim ăn uống giỏi nhất",
    "Cuộc thi chim bắt mồi",
    "Cuộc thi chim biểu diễn",
    "Việt Nam Bird Show",
    "Chim Việt Nam",
    "Cuộc thi chim đua Vòng nguyệt quế",
    "chim hoang dã Việt Nam",
    "Cuộc thi ảnh chim Việt Nam",
  ];

  const index = Math.floor(Math.random() * competitions.length);

  return competitions[index];
}

const randomAchievement = () => ({
  competition: randomCompetition(),
  rank: randomRank(),
});

const randomAchievements = () => {
  const n = randomRank() - 1;
  let res = [];
  for (let i = 0; i < n; ++i) {
    res.push(randomAchievement());
  }
  return res;
};

module.exports = randomAchievements;
