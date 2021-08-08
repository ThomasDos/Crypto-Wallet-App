const router = require("express").Router();
const Crypto = require("../models/crypto.model");

const lastWeekCrypto = require("../utils/last_week_data");
const lastDayCrypto = require("../utils/last_day_data");

router.route("/crypto").get(async (req, res) => {
  try {
    const crypto = await Crypto.find();
    res.send(crypto);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.route("/crypto/week").get(async (req, res) => {
  try {
    const cryptoWeek = await lastWeekCrypto("crypto");
    res.send(cryptoWeek);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.route("/crypto/day").get(async (req, res) => {
  try {
    const cryptoDay = await lastDayCrypto("crypto");
    res.send(cryptoDay);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
