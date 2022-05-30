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
});

const tenantSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
  },
});

// userSchema.pre('save', async function (next) {
//   const user = this
//   if (this.isModified('password') || this.isNew) {
//     bcrypt.genSalt(10, function (err, salt) {
//       if (err) {
//         return next(err)
//       } else {
//         bcrypt.hash(user.password, salt, function(err, hash) {
//           if (err) {
//             return next(err)
//           }
//           user.password = hash
//           next()
//         })
//       }
//     })
//   } else {
//     return next()
//   }
// })

const User = mongoose.model("User", userSchema, "users");

const Landlord = User.discriminator("Landlord", landlordSchema);

const Tenant = User.discriminator("Tenant", tenantSchema);

module.exports = {
  User,
  Landlord,
  Tenant,
};
