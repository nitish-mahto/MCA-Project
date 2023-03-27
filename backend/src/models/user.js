const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      require: true,
      trim: true,
    },
    last_name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    username: {
      type: String,
      require: true,
      trim: true,
    },

    password: {
      type: String,
      require: true,
      trim: true,
    },
    type:{
      type: String,
      require: true,
      trim: true,
    }
  },
  { timestamp: true }
);

userSchema.pre("save", function (next) {
  var user = this;
  if (!user.isModified("password")) return next();

  //generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

const user = mongoose.model("user", userSchema);

module.exports = user;
