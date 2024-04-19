const mongoose = require("mongoose");
const charSchema = new mongoose.Schema({
  char_id: Number,
  name: String,
 
});

module.exports = mongoose.model("Char", charSchema);