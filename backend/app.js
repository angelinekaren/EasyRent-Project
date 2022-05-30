const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOpt = {
  origin: "http://localhost:3000",
};

// routes
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");

app.use(cors(corsOpt));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.use("/", authRoutes);
app.use(userRoutes);

module.exports = app;
