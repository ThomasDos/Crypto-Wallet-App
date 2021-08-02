const Crypto = require("../models/crypto.model");

module.exports = async () => {
  const myArray = await Crypto.find();

  myArray.sort((a, b) => a.date - b.date);

  return myArray[myArray.length - 1];
};
