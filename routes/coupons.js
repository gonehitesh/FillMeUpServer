const express = require("express");
const router = express.Router();
const Coupons = require("../models/coupons");

router.post("/addCoupons", (req, res) => {
  let coupons = new Coupons(req.body);
  coupons
    .save()
    .then((coupons) => {
      res.status(200).send("Coupons added successfully");
      //console.log(user);
    })
    .catch((err) => {
      res.status(400).send("Cannot add coupons " + err);
    });
});

router.delete("/deleteCoupons", (req, res) => {
  Coupons.deleteOne({ _id: req.body.id })
  .then((coupons) => {
    res.status(200).send("Coupons deleted successfully");
    })
    .catch((err) => {
    res.status(400).send("Error while deleting coupons" + err);
    });
});

router.put("/editCoupons", (req, res) => {
  Coupons.updateOne(
    { _id: req.body.id },
    {
      name: req.body.name,
      expireDate: req.body.expireDate,
      couponCode: req.body.couponCode,
      description: req.body.description,
      image: req.body.image,
    }
  )
    .then((coupons) => {
      res.status(200).send("Coupons updated successfully");
    })
    .catch((err) => {
      res.status(400).send("Error while updating coupons" + err);
    });
});

router.get("/getCoupons", (req, res) => {
  Coupons.find({})
  .then((coupons) => {
    res.status(200).json(coupons);
    })
    .catch((err) => {
      res.status(400).send("Error while fetching coupons" + err);
    });
});

module.exports = router;
