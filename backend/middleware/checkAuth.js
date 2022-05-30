const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

renterAuth = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    // FORBIDDEN, refuse to authorize
    return res
      .status(403)
      .json({ message: "Not authorized! No token provided! " });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        // unauthorized
        return res.status(401).json({ message: "Unauthorized!" });
      } else {
        if (decoded.role != "tenant") {
          return res
            .status(403)
            .json({ message: "Require Rental Searcher Role" });
        } else {
          next();
        }
      }
    });
  }
};

ownerAuth = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    // FORBIDDEN, refuse to authorize
    return res
      .status(403)
      .json({ message: "Not authorized! No token provided! " });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        // unauthorized
        return res.status(401).json({ message: "Unauthorized!" });
      } else {
        if (decoded.role != "landlord") {
          return res
            .status(403)
            .json({ message: "Require Property Owner Role" });
        } else {
          next();
        }
      }
    });
  }
};

adminAuth = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    // FORBIDDEN, refuse to authorize
    return res
      .status(403)
      .json({ message: "Not authorized! No token provided! " });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        // unauthorized
        return res.status(401).json({ message: "Unauthorized!" });
      } else {
        if (decoded.role != "admin") {
          return res.status(403).json({ message: "Require Admin Role" });
        } else {
          next();
        }
      }
    });
  }
};

const checkAuth = {
  renterAuth,
  ownerAuth,
  adminAuth,
};

module.exports = checkAuth;
