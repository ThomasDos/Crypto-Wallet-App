const Crypto = require("../models/crypto.model");
const Portfolio = require("../models/portfolio.model");

module.exports = async (sort) => {
  const myArray =
    sort === "crypto" ? await Crypto.find() : await Portfolio.find();

  myArray.sort((a, b) => a.date - b.date);

  return myArray[myArray.length - 1];
};
