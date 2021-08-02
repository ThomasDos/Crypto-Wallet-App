const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const cryptoSchema = new Schema({
  BTC: {
    type: Number,
    required: true,
  },
  XRP: {
    type: Number,
    required: true,
  },
  ETH: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    unique: true,
  },
  dateString: {
    type: String,
    required: true,
    unique: true,
  },
});

const Crypto = mongoose.model("Crypto", cryptoSchema);

module.exports = Crypto;
