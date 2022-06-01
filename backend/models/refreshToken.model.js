const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const RefreshTokenSchema = new mongoose.Schema({
  token: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  expiryDate: {
    type: Date,
  },
});

// Query whole collection
RefreshTokenSchema.statics.createRefreshToken = async function (user) {
  const expiredAt = new Date();
  expiredAt.setSeconds(
    expiredAt.getSeconds() + process.env.JWT_REFRESH_EXPIRES_IN
  );
  let _token = uuidv4();
  let refreshTokenObject = new this({
    token: _token,
    userId: user._id,
    expiryDate: expiredAt.getTime(),
  });
  const refreshToken = await refreshTokenObject.save();
  return refreshToken.token;
};

RefreshTokenSchema.statics.verifyDate = (token) => {
  return token.expiryDate.getTime() < new Date().getTime();
};

const RefreshToken = mongoose.model("RefreshToken", RefreshTokenSchema);

module.exports = RefreshToken;
