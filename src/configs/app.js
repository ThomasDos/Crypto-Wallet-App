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

module.exports = app;
