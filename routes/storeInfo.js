const express = require("express");
const router = express.Router();
const StoreInfo = require("../models/storeInfo");

router.get("/storeinfo", (req, res) => {
  StoreInfo.find({})
    .then((storeInfo) => {
      res.status(200).json(storeInfo);
    })
    .catch((err) => {
      res.status(400).send("Error while fetching store info" + err);
    });
});

router.put("/editstoreinfo", (req, res) => {
  StoreInfo.updateOne(
    { _id: req.body.id },
    {
      iconPath: req.body.iconPath,
      managerName: req.body.managerName,
      contactNumber: req.body.contactNumber,
      address: req.body.address,
      additionalInfo: req.body.additionalInfo,
      email: req.body.email,
      instagramUrl: req.body.instagramUrl,
      twitterUrl: req.body.twitterUrl,
      facebookUrl: req.body.facebookUrl
    }
  )
    .then((storeInfo) => {
      res.status(200).send("Item updated successfully");
    })
    .catch((err) => {
      res.status(400).send("Error while updating item" + err);
    });
});

module.exports = router;
