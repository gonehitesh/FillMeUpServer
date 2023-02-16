const express = require("express");
const router = express.Router();
const Menu = require("../models/menu");

router.post("/addmenu", (req, res) => {
  let menu = new Menu(req.body);
  menu
    .save()
    .then((menu) => {
      res.status(200).send("success");
      //console.log(user);
    })
    .catch((err) => {
      res.status(400).send("Cannot add menu item" + err);
    });
});

router.get("/getmenu", (req, res) => {
  Menu.find({})
  .then((menu) => {
    res.status(200).json(menu);
    })
    .catch((err) => {
      res.status(400).send("Error while fetching menu items" + err);
    });
});

router.post("/getcategoryitems", (req, res) => {
  Menu.find({category: req.body.category})
  .then((menu) => {
    res.status(200).json(menu);
    })
    .catch((err) => {
      res.status(400).send("Error while fetching category items" + err);
    });
});

router.delete("/deleteitem", (req, res) => {
  Menu.deleteOne({itemName: req.body.itemName})
  .then((menu) => {
    res.status(200).send("Item deleted successfully");
    })
    .catch((err) => {
    res.status(400).send("Error while deleting item" + err);
    });
});

router.put("/edititem", (req, res) => {
  Menu.updateOne({ _id: req.body.id }, {
      itemName: req.body.itemName,
      category:req.body.category,
      description:req.body.description,
      allergies:req.body.allergies,
      calories:req.body.calories,
      image:req.body.image,
      price:req.body.price,
  })
  .then((menu) => {
    res.status(200).send("Item updated successfully");
    })
    .catch((err) => {
    res.status(400).send("Error while updating item" + err);
    });
});

module.exports = router;