const cron = require("node-cron");
const fetchCryptoAndUpdate = require("./update_crypto");

module.exports = () =>
  cron.schedule("0 0 0 * * *", () => {
    //! Running everyday at midnight
    fetchCryptoAndUpdate();
  });
