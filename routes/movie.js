const router = require("express").Router();
const Movie = require("../models/Movie");

// Get All Movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Movie by Id
router.get("/:id", async (req, res) => {
  const movieId = req.params.id;
  try {
    const movie = await Movie.findById(movieId);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a Movie
router.post("/", async (req, res) => {
  const newMovie = new Movie(req.body);
  try {
    const savedMovie = await newMovie.save();
    res.status(201).json({ message: "Success create a movie", savedMovie });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a Movie
router.delete("/:id", async (req, res) => {
  const movieId = req.params.id;

  try {
    await Movie.findByIdAndDelete(movieId);
    res.status(200).json({ message: "Success to delete a movie" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a Movie
router.put("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  const data = req.body;
  try {
    await movie.updateOne({ $set: data });
    res.status(200).json({ status: "Success", message: "Movie updated" });
  } catch (err) {}
});

module.exports = router;
