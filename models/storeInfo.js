const mongoose = require("mongoose");

const StoreInfoSchema = new mongoose.Schema({
  iconPath: {
    type: String,
    required: true,
  },
  managerName: {
    type: String,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const StoreInfo = mongoose.model("storeInfo", StoreInfoSchema);

module.exports = StoreInfo;
