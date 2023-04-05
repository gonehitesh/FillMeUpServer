const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    enum: [
      "appetizer",
      "main course",
      "soups",
      "breads",
      "sides",
      "desserts",
      "beverages",
    ],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  allergies: {
    type: String,
  },
  calories: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const Menu = mongoose.model("menu", MenuSchema);

module.exports = Menu;
