const jwt = require("jsonwebtoken");
require("dotenv").config();

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

const generateToken = (id) => {
  console.log(process.env.JWT_SECRET);
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

module.exports = generateToken;
