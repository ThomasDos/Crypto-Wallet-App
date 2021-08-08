const express = require("express");
const app = express();
const enforce = require("express-sslify");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
require("./router")(app);

//Configs

if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, "../../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
  });
}

//DB
require("../database/mongodb");

//Fetch API CMC and update DB
require("../utils/update_crypto_collection/update_crypto")(); //* Check if it has updated today
require("../utils/update_crypto_collection/scheduled_update_crypto")(); //* Program the schedule > everyday at midnight

//Daily update Wallet Value DB
require("../utils/update_portfolio_collection/scheduled_update_portfolio")(); //* Check if it has updated today
require("../utils/update_portfolio_collection/update_portfolio")(); //* Program the schedule > everyday at midnight

module.exports = app;
