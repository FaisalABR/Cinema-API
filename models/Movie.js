const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    release_date: {
      type: Date,
      required: true,
    },
    poster_url: {
      type: String,
      required: true,
    },
    age_rating: {
      type: Number,
      required: true,
    },
    ticket_price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", MovieSchema);
