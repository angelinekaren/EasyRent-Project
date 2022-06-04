const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  listingName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  ward: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  listedAt: {
    type: Date,
    default: Date.now,
  },
  facilities: [
    {
      type: String,
    },
  ],
  housephotos: {
    // data: Buffer,
    // contentType: String,
    type: String,
    required: true,
  },
  housecertif: {
    // data: Buffer,
    // contentType: String,
    type: String,
    required: true,
  },
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Landlord",
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = { Listing };
