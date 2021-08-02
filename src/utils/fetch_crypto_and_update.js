const Crypto = require("../models/crypto.model");
const fetchCMC = require("../services/coinmarketcap");
const newDate = require("./new_date");

module.exports = () => {
  fetchCMC
    .then(async (response) => {
      const { data } = response;
      try {
        const dateString = newDate();
        const crypto = new Crypto({
          BTC: Math.round(data.BTC.quote.EUR.price),
          ETH: Math.round(data.ETH.quote.EUR.price),
          XRP: data.XRP.quote.EUR.price.toFixed(2),
          date: new Date(dateString),
          dateString,
        });
        await crypto.save();
        console.log("successfully daily updated !");
      } catch (error) {
        console.log("Database is already up to date with API CMC");
      }
    })
    .catch((err) => {
      console.log("API call error:", err.message);
    });
};
