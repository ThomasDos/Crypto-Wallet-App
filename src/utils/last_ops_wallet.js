const Wallet = require("../models/wallet.model");
const lastDayData = require("./last_day_data");

module.exports = async () => {
  const myArray = await Wallet.find();
  const data = await lastDayData("crypto");

  const positiveTransactions = myArray.filter(
    (transaction) => transaction.price > 0
  );

  positiveTransactions.sort((a, b) => a.date - b.date);

  return positiveTransactions.slice(positiveTransactions.length - 9);
};
