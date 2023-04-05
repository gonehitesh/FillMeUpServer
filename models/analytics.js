const mongoose = require("mongoose");

const AnalyticsSchema = new mongoose.Schema({
  order:{
    type: String,
    required: true,
  },
  couponCode: {
    type: String,
  },
  price:{
    type: Number,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const Analytics = mongoose.model("analytics", AnalyticsSchema);

module.exports = Analytics;
