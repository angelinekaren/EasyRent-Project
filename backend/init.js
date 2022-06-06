const dotenv = require("dotenv");
dotenv.config();

const bcrypt = require("bcryptjs");

const {
  ADMIN_ACCOUNT_USERNAME,
  ADMIN_ACCOUNT_EMAIL,
  ADMIN_ACCOUNT_FULLNAME,
  ADMIN_ACCOUNT_PASSWORD,
} = process.env;

module.exports = function (db) {
  return new Promise(function (resolve) {
    var User = db.model("User");
    User.findOne({ email: ADMIN_ACCOUNT_EMAIL }, function (err, user) {
      if (err) {
        throw err;
      }
      if (!user) {
        bcrypt.hash(ADMIN_ACCOUNT_PASSWORD, 10).then(async (hashPswd) => {
          var newAdmin = await new User({
            username: ADMIN_ACCOUNT_USERNAME,
            fullname: ADMIN_ACCOUNT_FULLNAME,
            email: ADMIN_ACCOUNT_EMAIL,
            password: hashPswd,
            role: "admin",
          });
          newAdmin.save(function (err) {
            if (err) {
              throw err;
            }
            resolve();
          });
        });
      } else {
        resolve();
      }
    });
  });
};
