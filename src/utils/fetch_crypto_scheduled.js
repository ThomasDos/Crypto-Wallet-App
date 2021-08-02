const cron = require("node-cron");
const fetchCryptoAndUpdate = require("./fetch_crypto_and_update");

module.exports = () =>
  cron.schedule("0 0 0 * * *", () => {
    //! Running everyday at midnight
    fetchCryptoAndUpdate();
  });
