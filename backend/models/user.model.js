const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "",
    enum: ["landlord", "tenant", "admin"],
  },
});

const landlordSchema = new mongoose.Schema({
  mobile_phone: {
    type: String,
    required: true,
  },
  selfie_image: {
    type: String,
  },
  ktp_image: {
    type: String,
  },
  isVerified: {
    type: Boolean,
  },
});

const tenantSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  recentlyviewed: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const User = mongoose.model("User", userSchema, "users");

const Landlord = User.discriminator("Landlord", landlordSchema);

const Tenant = User.discriminator("Tenant", tenantSchema);

module.exports = {
  User,
  Landlord,
  Tenant,
};
