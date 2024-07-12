const redis = require("redis");
const dotenv = require("dotenv");

dotenv.config();

const redisClient = redis.createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: "redis-16463.c1.us-central1-2.gce.redns.redis-cloud.com",
    port: 16463,
  },
});

// Redis Connect
redisClient
  .connect(console.log("Redis Connected"))
  .catch((err) => console.log("Redis error: ", err));

module.exports = redisClient;
