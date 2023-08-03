const mongoose = require("mongoose");

const SeatSchema = new mongoose.Schema({
  id_movie: {
    type: String,
    required: true,
  },
  seats: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Seat", SeatSchema);
