const jwt = require("jsonwebtoken");
const config = require("../config");

const generateToken = (id) => {
  return jwt.sign({ id }, config.jwtSecretKey, {
    expiresIn: "2h",
  });
};

module.exports = generateToken;
