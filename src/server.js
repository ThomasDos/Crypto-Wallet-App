const app = require("./configs/app");
const Crypto = require("./models/cryptos.model");
const fetchCMC = require("./services/coinmarketcap");
const newDate = require("./utils/new_date");
const cron = require("node-cron");

cron.schedule("0 0 0 * * *", () => {
  //! Running everyday at midnight
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
        console.log(error.message);
      }
    })
    .catch((err) => {
      console.log("API call error:", err.message);
    });
});

//Server
require("./configs/server")(app);
