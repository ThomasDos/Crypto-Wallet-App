const Portfolio = require("../../models/portfolio.model");
const Wallet = require("../../models/wallet.model");
const findQuantity = require("../find_quantity");
const lastDayCrypto = require("../last_day_data");
const newDate = require("../new_date");

module.exports = async () => {
  try {
    const wallet = await Wallet.find();
    const dateString = newDate();
    const dailyPortfolio = {
      ETH: { quantity: findQuantity(wallet, "ETH") },
      BTC: { quantity: findQuantity(wallet, "BTC") },
      XRP: { quantity: findQuantity(wallet, "XRP") },
      dateString,
      date: new Date(dateString),
    };

    const { BTC, ETH, XRP } = await lastDayCrypto();

    dailyPortfolio.ETH.value = ETH.value * dailyPortfolio.ETH.quantity;
    dailyPortfolio.BTC.value = BTC.value * dailyPortfolio.BTC.quantity;
    dailyPortfolio.XRP.value = XRP.value * dailyPortfolio.XRP.quantity;

    await new Portfolio(dailyPortfolio).save();
  } catch (error) {
    console.log("Database is already up to date with Wallet value");
  }
};
