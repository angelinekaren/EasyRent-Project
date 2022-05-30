const express = require("express");
const router = express.Router();
const { adminBoard } = require("../controllers/user.controllers");
const { adminAuth } = require("../middleware/checkAuth");

router.get("/admin", adminAuth, adminBoard);

module.exports = router;
