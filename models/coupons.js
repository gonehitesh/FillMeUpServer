const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  expireDate: {
    type: String,
    required: true,
  },
  couponCode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  offerOver:{
    type: Number,
    required: true,  
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const Coupons = mongoose.model("coupons", CouponSchema);

module.exports = Coupons;
