const mongoose = require("mongoose");

const dailyReportSchema = new mongoose.Schema(
  {
    ETH: {
      value: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
    },

    BTC: {
      value: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
    },

    XRP: {
      value: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
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
  },
  { timestamps: true }
);

const DailyReport = mongoose.model("DailyReport", dailyReportSchema);

module.exports = DailyReport;
