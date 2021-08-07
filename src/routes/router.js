const express = require("express");
const router = express.Router();
//Routes
const walletRoute = require("./wallet_route");
const cryptoRoute = require("./crypto_route");
const dailyReportRoute = require("./portfolio_route");
//Router
router.use(walletRoute, cryptoRoute, dailyReportRoute);

module.exports = router;
