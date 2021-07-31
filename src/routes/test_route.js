const app = require("express")();

app.route("/test").get((req, res) => {
  res.send("test ok");
});

module.exports = app;
