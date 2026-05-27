const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  instructor: {
    type: String,
    required: true,
  },

  platform: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  rating: {
    type: Number,
    default: 0,
  },

  category: {
    type: String,
    required: true,
  },

  duration: {
    type: String,
    required: true,
  },

  level: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  description: {
    type: String,
  },

}, {
  timestamps: true,
});

module.exports =
  mongoose.model("Course", courseSchema);