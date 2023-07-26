const mongoose = require("mongoose");

const BalanceSchema = new mongoose.Schema(
  {
    balance: {
      type: Number,
      required: true,
      default: 300000,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Balance", BalanceSchema);
