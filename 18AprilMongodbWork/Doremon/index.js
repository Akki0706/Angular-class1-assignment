
const express = require("express");
const charRoutes = require("./routes/charRoutes.js");
const gadRoutes = require("./routes/gadRoutes.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
 
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

app.use("/", charRoutes);
app.use("/", gadRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});



/*
mongodb+srv://akkirauniyar0201:Ankit54329@cluster0.uwanlm4.mongodb.net/my_characters
*/