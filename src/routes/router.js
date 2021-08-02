const express = require("express");
const router = express.Router();
//Routes
const walletRoute = require("./wallet_route");
const cryptoRoute = require("./crypto_route");
//Router
router.use(walletRoute, cryptoRoute);

module.exports = router;
