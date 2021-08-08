const mongoose = require("mongoose");

const mongoDBAtlas = `mongodb+srv://admin:${process.env.MONGOATLAS_KEY}@cluster0.kxhxu.mongodb.net/CryptoWalletDB?retryWrites=true&w=majority`;

const urlDB =
  process.env.NODE_ENV.trim() == "development"
    ? process.env.MONGODB_LOCAL
    : mongoDBAtlas;

mongoose.connect(mongoDBAtlas, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
