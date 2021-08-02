const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const walletSchema = new Schema(
  {
    coin: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    dateString: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Wallet = mongoose.model("Wallet", walletSchema);

module.exports = Wallet;
