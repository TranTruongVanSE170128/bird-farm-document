function randomBreedPrice() {
    // Lấy số ngẫu nhiên trong khoảng từ 0 đến max - min + 1
    const random = Math.floor(Math.random() * (200 - 50 + 1));
  
    // Thêm min để có số ngẫu nhiên trong khoảng từ min đến max
    return parseInt(random + 50) * 1000;
  }
  
  module.exports = randomBreedPrice;
  