const express = require("express");
const router = express.Router();
const {
  PostFavorites,
  getAllFavorites,
  DeleteFavorites,
} = require("../controllers/tenant.controllers");
const { requireSignIn } = require("../middleware/checkAuth");

router.post("/:id", requireSignIn, PostFavorites);
router.delete("/:id", requireSignIn, DeleteFavorites);
router.get("/getAllFavorites", requireSignIn, getAllFavorites);

module.exports = router;
