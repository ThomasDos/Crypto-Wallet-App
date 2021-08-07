const app = require("express")();
const Wallet = require("../models/wallet.model");
const newDate = require("../utils/new_date");
const lastOpsWallet = require("../utils/last_ops_wallet");

app.route("/wallet/last").get(async (req, res) => {
  const wallet = await lastOpsWallet();
  res.send(wallet);
});

app
  .route("/wallet")
  .get(async (req, res) => {
    const wallet = await Wallet.find();
    res.send(wallet);
  })
  .post(async (req, res) => {
    const { coin, price, quantity } = req.body;
    if (coin !== "ETH" && coin !== "BTC" && coin !== "XRP")
      return res.status(400).send();
    const dateString = newDate();
    const wallet = new Wallet({
      coin,
      price,
      quantity,
      dateString,
      date: new Date(dateString),
    });
    try {
      wallet.save();
      res.send(wallet);
    } catch (error) {
      res.send(error.message);
    }
  })
  .delete(async (req, res) => {
    try {
      await Wallet.deleteMany();
      res.send();
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app
  .route("/wallet/:id")
  .get(async (req, res) => {
    try {
      const transaction = await Wallet.findById(req.params.id);

      if (!transaction) return res.status(404).send();
      res.send(transaction);
    } catch (error) {
      res.status(500).send(error.message);
    }
  })
  .delete(async (req, res) => {
    try {
      const transaction = await Wallet.findByIdAndDelete(req.params.id);

      if (!transaction) return res.status(404).send();
      res.send(transaction);
    } catch (error) {
      res.status(500).send(error.message);
    }
  })
  .patch(async (req, res) => {
    const { coin } = req.body;
    if (coin && coin !== "ETH" && coin !== "BTC" && coin !== "XRP")
      return res.status(400).send();
    try {
      const transaction = await Wallet.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      );

      if (!transaction) return res.status(404).send();

      res.send(transaction);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

module.exports = app;
