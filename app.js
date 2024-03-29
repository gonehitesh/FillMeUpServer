const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const User = require("./models/users");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//DB config
const db = require("./config/key").MongodbURI;

//connect Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

//Bodyparse`
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
  next();
});

app.use("/", require("./routes/users"));
app.use("/", require("./routes/menu"));
app.use("/", require("./routes/storeInfo"));
app.use("/", require("./routes/coupons"));
app.use("/", require("./routes/contactUs"));
app.use("/", require("./routes/analytics"));

const PORT = process.env.PORT || 3002;

app.listen(PORT, console.log("Server running on ", PORT));

module.exports = app;
