const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const movieRouter = require("./routes/movie");
const ticketRouter = require("./routes/ticket");
const balanceRouter = require("./routes/balance");

const app = express();

dotenv.config();
// MongoDb Connect
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to mongo DB");
  })
  .catch((err) => console.log(err));
// Middleware
app.use(express.json());

// Router
app.use("/api/movies", movieRouter);
app.use("/api/tickets", ticketRouter);
app.use("/api/balance", balanceRouter);

// App listen
const PORT = 8888;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// http://www.omdbapi.com/?apikey=a8b2e133&i=tt0848228
