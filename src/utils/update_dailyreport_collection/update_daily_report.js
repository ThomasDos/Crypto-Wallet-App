const DailyReport = require("../../models/daily.model");
const Wallet = require("../../models/wallet.model");
const findQuantity = require("../find_quantity");
const lastDayCrypto = require("../last_day_crypto");
const newDate = require("../new_date");

module.exports = async () => {
  try {
    const wallet = await Wallet.find();
    const dateString = newDate();
    const dailyWallet = {
      ETH: { quantity: findQuantity(wallet, "ETH") },
      BTC: { quantity: findQuantity(wallet, "BTC") },
      XRP: { quantity: findQuantity(wallet, "XRP") },
      dateString,
      date: new Date(dateString),
    };

    const { BTC, ETH, XRP } = await lastDayCrypto();

    dailyWallet.ETH.value = ETH * dailyWallet.ETH.quantity;
    dailyWallet.BTC.value = BTC * dailyWallet.BTC.quantity;
    dailyWallet.XRP.value = XRP * dailyWallet.XRP.quantity;

    await new DailyReport(dailyWallet).save();
  } catch (error) {
    console.log("Database is already up to date with Wallet value");
  }
};
