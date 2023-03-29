const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  parent: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  uploadAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("categories", categorySchema);
