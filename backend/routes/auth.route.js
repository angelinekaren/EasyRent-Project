const express = require("express");
const router = express.Router();
const {
  TenantRegister,
  LanlordRegister,
  Login,
} = require("../controllers/auth.controllers");

router.get("/", async (req, res, next) => {
  res.send("hi");
});

router.get("/login", async (req, res, next) => {
  res.send("login");
});

router.get("/renter", async (req, res, next) => {
  res.json(req.body);
});

router.post("/signup/renter", TenantRegister);
router.post("/signup/owner", LanlordRegister);

router.post("/login", Login);

router.get("/logout", async (req, res, next) => {
  res.send("logout");
});

module.exports = router;
