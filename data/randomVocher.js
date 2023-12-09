const objectId = require("./randomObjectId");

const randomVoucher = () => {
  const voucher = {
    _id: {
      $oid: String(objectId()),
    },
    expiredAt: {
      $date: String(randomDayInRange()),
    },
    discountPercent: randomDiscountPercent(),
    maxDiscountValue: randomMaxDiscountValue(),
    conditionPrice: randomConditionPrice(),
    quantity: randomDiscountQuantity(),
    enable: true,
    __v: 0,
  };

  return voucher;
};

function randomDayInRange() {
  const currentDate = new Date();
  const randomDays = Math.floor(Math.random() * (21 - 7 + 1)) + 7;
  const randomDate = new Date(
    currentDate.setDate(currentDate.getDate() + randomDays)
  );
  return randomDate;
}

function randomDiscountPercent() {
  const min = 1;
  const max = 5;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDiscountQuantity() {
  const min = 5;
  const max = 25;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomMaxDiscountValue() {
  const min = 50;
  const max = 200;
  const range = max - min + 1;
  const randomValue = Math.floor(Math.random() * range) + min;
  const roundedValue = Math.round(randomValue / 10) * 10;

  return roundedValue * 1000;
}

function randomConditionPrice() {
  const min = 500;
  const max = 5000;
  const range = max - min + 1;
  const randomValue = Math.floor(Math.random() * range) + min;
  const roundedValue = Math.round(randomValue / 100) * 100;

  return roundedValue * 1000;
}
module.exports = randomVoucher;
