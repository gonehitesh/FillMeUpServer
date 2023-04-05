const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { response } = require("../app");

router.post("/contactUS", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gonehitesh@gmail.com",
      pass: "gjwlexhtdykausqw",
    },
  });

  const emailBody = `<div> 
      <p>Name: ${req.body.firstName} ${req.body.lastName}</p>
      <p>Date of event: ${req.body.date !== "" ? req.body.date : "No date provided"}</p>
      <p>Email: ${req.body.email}</p>
      <p>Phone Number: ${req.body.phoneNumber}</p>
      <p>Context: ${req.body.context}</p>
  </div>`;


  const mailOptions = {
    from: "gonehitesh@gmail.com",
    to: "gonehitesh@gmail.com",
    subject: `FillMeUp Customer Request ${req.body.subject}`,
    html: emailBody,
  };

  await transporter
    .sendMail(mailOptions)
    .then((response) => {
      res.status(200).send("Email sent successfully");
    })
    .catch((error) => {
      res.status(500).send("Server error while sending email" + error);
    });
});

module.exports = router;
