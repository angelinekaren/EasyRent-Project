const { Listing } = require("../models/listings.model");
const asyncHandler = require("express-async-handler");

// Add Listing
const PostListing = asyncHandler(async (req, res) => {
  try {
    const {
      listingName,
      address,
      district,
      ward,
      city,
      postcode,
      price,
      facilities,
      gender,
      size,
    } = req.body;
    let userId = req.userId;

    let image1 = req.files.housephotos[0].path;
    let image2 = req.files.housecertif[0].path;

    await Listing.create({
      listingName: listingName,
      address: address,
      district: district,
      ward: ward,
      city: city,
      postcode: postcode,
      price: price,
      gender: gender,
      size: size,
      listedAt: Date.now(),
      facilities: facilities,
      housephotos: image1,
      housecertif: image2,
      userId: userId,
    }).then((result) => {
      return res.status(201).json({
        message: `Succesfully posted`,
        result,
      });
    });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
});

const getAllListingsByUser = asyncHandler(async (req, res) => {
  try {
    Listing.find({ userId: req.userId }, (err, result) => {
      if (err) {
        return res.status(404).json({ message: "No listing found" });
      }
      return res.status(200).json({
        message: "Found",
        result,
      });
    });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
});

// Get all listing
const GetListing = (req, res) => {
  try {
    Listing.find().then((result) => {
      res.send(result);
      res.status(201);
    });
  } catch (err) {
    return res.status(400);
  }
};

// Get Individual Listing
const GetIndividualListing = (req, res) => {
  Listing.findById(req.params.id)
    .then((result) => {
      res.send(result);
      res.status(201);
    })
    .catch((err) => {
      res.status(404).json({ message: "Listing Not Found" });
    });
};

// Update
const UpdateListing = (req, res) => {
  console.log(req.body);
  Listing.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
    // res.send();
    res.status(201).json({ message: "Successfully Updated" });
  });
};

// Delete
const DeleteListing = (req, res) => {
  Listing.findByIdAndRemove(req.params.id).then(() => {
    return res.status(201).json({ message: "Successfully Deleted" });
  });
};

module.exports = {
  PostListing,
  GetListing,
  GetIndividualListing,
  UpdateListing,
  DeleteListing,
  getAllListingsByUser,
};
