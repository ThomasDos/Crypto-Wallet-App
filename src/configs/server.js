const port = process.env.PORT || 5000;

module.exports = (app) => {
  app.listen(port, (err) => {
    if (err) {
      console.log("Server error : " + err);
    } else {
      console.log("Server is running on port : " + port);
    }
  });
};
