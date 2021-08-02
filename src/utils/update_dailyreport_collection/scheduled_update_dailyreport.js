const cron = require("node-cron");
const updateDailyReport = require("./update_daily_report");

module.exports = () =>
  cron.schedule("0 1 0 * * *", () => {
    //! Running everyday at midnight and 1 minute
    updateDailyReport();
  });
