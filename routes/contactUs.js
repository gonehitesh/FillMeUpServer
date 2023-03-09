const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { response } = require("../app");

router.post("/contactUS", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "@gmail.com",
      pass: "",
    },
  });

  const emailBody = `<div> 
      <p>Name: ${req.body.name}</p>
      <p>Date of event: ${req.body.date}</p>
      <p>Email: ${req.body.email}</p>
      <p>Phone Number: ${req.body.phoneNumber}</p>
      <p>Context: ${req.body.context}</p>
  </div>`;


  const mailOptions = {
    from: "gonesathwika@gmail.com",
    to: "gonesathwika@gmail.com",
    subject: "FillMeUp Customer Request",
    html: emailBody,
  };

  await transporter
    .sendMail(mailOptions)
    .then((response) => {
      res.status(200).send("Email sent successfully");
    })
    .catch((error) => {
      res.status(500).send("Server error while sending email" + err);
    });
});

module.exports = router;
