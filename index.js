const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const movieRouter = require("./routes/movie");
const ticketRouter = require("./routes/ticket");
const balanceRouter = require("./routes/balance");
const seatRouter = require("./routes/seat");

const app = express();
const redisClient = require("./utils/redisClient");
// import { createClient } from 'redis';
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
app.use("/api/seats", seatRouter);

// App listen
const PORT = 8888;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
