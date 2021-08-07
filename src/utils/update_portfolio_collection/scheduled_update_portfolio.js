const cron = require("node-cron");
const updatePortfolio = require("./update_portfolio");

module.exports = () =>
  cron.schedule("0 1 0 * * *", () => {
    //! Running everyday at midnight and 1 minute.
    updatePortfolio();
  });
