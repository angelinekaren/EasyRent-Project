const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    rating: {
      type: Number,
      required: true,
    },
    reviewsComment: {
      type: String,
      required: true,
    },
    user: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
    },
  },
  {
    timestamps: true,
  }
);

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
    type: String,
    required: true,
  },
  housecertif: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numberOfReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Landlord",
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = { Listing };
