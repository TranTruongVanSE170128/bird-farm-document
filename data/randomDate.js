function randomDate() {
  // Lấy thời gian hiện tại
  const now = new Date();

  // Lấy thời gian 3 năm trước
  const threeYearsAgo = new Date(now.getTime() - 3 * 31557600000);

  // Tạo ra một số ngẫu nhiên trong khoảng từ 0 đến 1
  const randomNumber = Math.random();

  // Tính toán timestamp dựa trên thời gian hiện tại và số ngẫu nhiên
  const timestamp = new Date(
    threeYearsAgo.getTime() +
      randomNumber * (now.getTime() - threeYearsAgo.getTime())
  );

  return timestamp;
}

module.exports = randomDate;
