const express = require("express");
const app = express();
const enforce = require("express-sslify");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configs

if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, "../../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
  });
}

//Router
require("./router")(app);

//DB
require("../database/mongodb");

//Fetch API CMC and update DB
require("../utils/update_crypto_collection/update_crypto")(); //* Check if it has updated today
require("../utils/update_crypto_collection/scheduled_update_crypto")(); //* Program the schedule > everyday at midnight

//Daily update Wallet Value DB
require("../utils/update_dailyreport_collection/scheduled_update_dailyreport")(); //* Check if it has updated today
require("../utils/update_dailyreport_collection/update_daily_report")(); //* Program the schedule > everyday at midnight

module.exports = app;
