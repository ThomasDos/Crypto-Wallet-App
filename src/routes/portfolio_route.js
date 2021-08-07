const app = require("express")();
const lastWeekData = require("../utils/last_week_data");
const lastDayData = require("../utils/last_day_data");

const Portfolio = require("../models/portfolio.model");

app.route("/portfolio").get(async (req, res) => {
  try {
    const portfolio = await Portfolio.find();
    res.send(portfolio);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.route("/portfolio/week").get(async (req, res) => {
  try {
    const portfolioWeek = await lastWeekData();
    res.send(portfolioWeek);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.route("/portfolio/day").get(async (req, res) => {
  try {
    const portfolioDay = await lastDayData();
    res.send(portfolioDay);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;
