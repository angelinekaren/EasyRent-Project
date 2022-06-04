const mongoose = require("mongoose");
// const { v4: uuidv4 } = require("uuid");

const RefreshTokenSchema = new mongoose.Schema({
  token: { type: String },
});

// // Query whole collection
// RefreshTokenSchema.statics.createRefreshToken = async function (user) {
//   const expiredAt = new Date();
//   expiredAt.setSeconds(
//     expiredAt.getSeconds() + process.env.JWT_REFRESH_EXPIRES_IN
//   );
//   let _token = uuidv4();
//   let refreshTokenObject = new this({
//     token: _token,
//     userId: user._id,
//     expiryDate: expiredAt.getTime(),
//   });
//   const refreshToken = await refreshTokenObject.save();
//   return refreshToken.token;
// };

// RefreshTokenSchema.statics.verifyDate = (token) => {
//   return token.expiryDate.getTime() < new Date().getTime();
// };

RefreshTokenSchema.methods.createRefreshToken = async function (user) {
  try {
    let refreshToken = generateRefreshToken(user._id);
    await new this({
      token: refreshToken,
    }).save();
    return refreshToken;
  } catch (err) {
    console.error(err);
    return;
  }
};

const RefreshToken = mongoose.model("RefreshToken", RefreshTokenSchema);

module.exports = RefreshToken;
