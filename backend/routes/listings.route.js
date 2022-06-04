const express = require("express");
const router = express.Router();
const {
  PostListing,
  getAllListingsByUser,
} = require("../controllers/listings.controllers");
const multer = require("multer");
const uuid = require("uuid");
const { requireSignIn } = require("../middleware/checkAuth");

const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/listingsData/");
  },
  filename: function (req, file, cb) {
    cb(null, uuid.v1() + ".png");
  },
});

const upload = multer({ storage: Storage });

const multipleImage = upload.fields([
  { name: "housephotos", maxCount: 1 },
  { name: "housecertif", maxCount: 1 },
]);

router.post("/addListing", requireSignIn, [multipleImage, PostListing]);
// router.get("/post-listing", async (req, res, next) => {
//   res.send("post");
// });

router.get("/getAllUserListing", requireSignIn, getAllListingsByUser);

module.exports = router;
