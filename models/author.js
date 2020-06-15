const mongoose = require("mongoose");

// creating essential a data table for our Authors
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
// setting and exporting the name of our data table
module.exports = mongoose.model("Author", authorSchema);
