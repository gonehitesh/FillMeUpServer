const express = require("express");
const router = express.Router();
const User = require("../models/users");
const db = require("../config/key").MongodbURI;

router.get("/", (req, res) => {
  res.send({ message: "hey im object" });
});

router.post("/adduser", (req, res) => {
  let user = new User(req.body);
  user
    .save()
    .then((user) => {
      res.status(200).send("success");
      //console.log(user);
    })
    .catch((err) => {
      res.status(400).send("Cannot register user" + err);
    });
});

module.exports = router;
