const express = require("express");
const router = express.Router();
const User = require("../models/users");

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

router.post("/validateuser", (req, res) => {
  User.find({email:req.body.email})
  .then((user) => {
    if(user[0].password === req.body.password){
      res.status(200).send(user);
    }
    else{
      res.status(400).send("password didnt match");
    }
    })
    .catch((err) => {
      res.status(400).send("user not found " + err);
    });
});

module.exports = router;
