function randomGender() {
  // Tạo một mảng chứa hai giá trị 'male' và 'female'
  const genders = ["male", "female"];

  // Sử dụng hàm Math.random() để lấy một giá trị ngẫu nhiên từ 0 đến 1
  const index = Math.floor(Math.random() * genders.length);

  // Trả về giá trị ngẫu nhiên
  return genders[index];
}

module.exports = randomGender;
