const Ticket = require("../models/Ticket");
const router = require("express").Router();

// Get All Tickets
router.get("/", async (req, res) => {
  try {
    const allTickets = await Ticket.find();
    res.status(200).json(allTickets);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a Ticket
router.post("/", async (req, res) => {
  const newTicket = new Ticket(req.body);
  try {
    const savedTicket = await newTicket.save();
    res.status(201).json({
      status: "Success",
      message: "Create ticket is successful",
      savedTicket,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Cancel Ticket
router.delete("/:id", async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ status: "Success", message: "Ticket successfully delete" });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Confirm Payment
router.put("/:id", async (req, res) => {
  const newStatus = req.body;
  try {
    const updateTicket = await Ticket.findByIdAndUpdate(req.params.id, {
      $set: newStatus,
    });
    res
      .status(201)
      .json({ status: "Success", message: "Your ticket succesfully paid" });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
