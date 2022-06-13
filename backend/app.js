const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOpt = {
  origin: "*",
  credentials: true,
};

// routes
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
const listingrouter = require("./routes/listings.route");
const landlordVerification = require("./routes/landlordVerification.route");
const tenantRoutes = require("./routes/tenant.route");

app.use(cors(corsOpt));

app.use(function (req, res, next) {
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "x-access-token, Origin, Content-Type, Accept"
  // );
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Origin, x-access-token"
  );
  next();
});

app.use(express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", authRoutes);
app.use("/api/listing", listingrouter);
app.use("/api/landlordVerified", landlordVerification);
app.use("/api/tenants", tenantRoutes);
app.use("/api/admin", userRoutes);

module.exports = app;
