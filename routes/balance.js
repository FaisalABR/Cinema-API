const router = require("express").Router();
const Balance = require("../models/Balance");

// Get Balance
router.get("/", async (req, res) => {
  try {
    const balance = await Balance.find();
    res.status(200).json(balance);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create Balance?
router.post("/", async (req, res) => {
  try {
    const balance = new Balance();
    const savedBalance = await balance.save();
    res.status(201).json(savedBalance);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Top Up Balance
router.put("/:id/topup", async (req, res) => {
  const amount = req.body;
  try {
    await Balance.findByIdAndUpdate(req.params.id, { $inc: amount });
    res.status(200).json({ status: "Success", message: "Top up is success" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Refund Balance
router.put("/:id/refund", async (req, res) => {
  const amount = req.body;
  try {
    await Balance.findByIdAndUpdate(req.params.id, { $inc: amount });
    res.status(200).json({ status: "Success", message: "Refund is success" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Withdraw Balance
router.put("/:id/withdraw", async (req, res) => {
  const amount = req.body;
  try {
    await Balance.findByIdAndUpdate(req.params.id, { $inc: amount });
    res.status(200).json({ status: "Success", message: "Withdraw is success" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
