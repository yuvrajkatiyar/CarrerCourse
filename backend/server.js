const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const courseRoutes =
  require("./routes/courseRoutes");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/auth", authRoutes);

app.use("/api/courses", courseRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  console.log(`http://localhost:5000/`);
});
