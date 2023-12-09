const getRandomSpecies = require("./randomSpecie");
const randomDate = require("./randomDate");
const objectId = require("./randomObjectId");
const randomBird = require("./randomBird");
const randomNest = require("./randomNest");
const fs = require("fs");
const specieIdToName = require("./speciedIdToName");
const randomVoucher = require("./randomVocher");

function generateBirds() {
  // Tạo mảng 200 con chim
  const birds = [];
  for (let i = 0; i < 200; i++) {
    birds.push(randomBird());
  }

  // Lưu mảng chim vào file JSON
  const data = JSON.stringify(birds);
  fs.writeFile("birds.json", data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Đã lưu mảng chim vào file JSON thành công!");
    }
  });
}

generateBirds()

function generateNests() {
  // Tạo mảng 100 tổ chim
  const nests = [];
  for (let i = 0; i < 100; i++) {
    nests.push(randomNest());
  }

  // Lưu mảng tổ chim vào file JSON
  const data = JSON.stringify(nests);
  fs.writeFile("nests.json", data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Đã lưu mảng tổ chim vào file JSON thành công!");
    }
  });
}

generateNests();

// function generateVouchers() {
//   const vouchers = [];
//   for (let i = 0; i < 15; i++) {
//     vouchers.push(randomVoucher());
//   }

//   const data = JSON.stringify(vouchers);
//   fs.writeFile("vouchers.json", data, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Đã lưu mảng voucher vào file JSON thành công!");
//     }
//   });
// }

// generateVouchers();
