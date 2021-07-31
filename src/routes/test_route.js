const app = require("express")();

app.route("/test").get((req, res) => {
  console.log("TEST FRONT>>>>>>");
  res.send("test ok");
});

module.exports = app;
