const router = require("express").Router();
const Seat = require("../models/Seat");

// Get All Seats
router.get("/", async (req, res) => {
  try {
    const allSeats = await Seat.find();
    res.status(200).json(allSeats);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Seats by Id
router.get("/:id", async (req, res) => {
  try {
    const seats = await Seat.findById(req.params.id);
    res.status(200).json(seats);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Post Seats
router.post("/", async (req, res) => {
  const newSeats = new Seat(req.body);
  try {
    const savedSeats = await newSeats.save();
    res.status(201).json(savedSeats);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Reserved Seats
router.put("/:id/reserve", async (req, res) => {
  const { movieIdToUpdate, seatNumbersToUpdate } = req.body;
  const newStatus = "occupied";
  try {
    const updatePromises = seatNumbersToUpdate.map(async (seatNumber) => {
      const result = await Seat.updateOne(
        {
          id_movie: movieIdToUpdate,
          "seats.seatNumber": seatNumber,
        },
        { $set: { "seats.$.status": newStatus } }
      );
      return result;
    });

    await Promise.all(updatePromises);
    res.status(200).json({ message: `Seat successfully reserved` });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Cancel Reserve
router.put("/:id/unreserve", async (req, res) => {
  const { movieIdToUpdate, seatNumbersToUpdate } = req.body;
  const newStatus = "empty";
  try {
    const updatePromises = seatNumbersToUpdate.map(async (seatNumber) => {
      const result = await Seat.updateMany(
        {
          id_movie: movieIdToUpdate,
          "seats.seatNumber": seatNumber,
        },
        { $set: { "seats.$.status": newStatus } }
      );
      return result;
    });

    await Promise.all(updatePromises);
    res.status(200).json({ message: "Seats successfully unreserved" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
