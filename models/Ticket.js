const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
  {
    movieId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    selectedSeats: {
      type: Array,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", TicketSchema);
