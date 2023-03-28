const User = require("../models/user");
const tokenSchema = require("../models/tokenSchema");
const Joi = require("joi");
const { generateJWT } = require("../models/token");
const bcrypt = require("bcrypt");

async function login(req, res) {
  try {
    let vendor = await User.findOne({
      $and: [
        {
          $or: [{ email: req.body.email }, { username: req.body.username }],
        },
        { type: req.body.type },
      ],
    })
      .lean()
      .exec();

    if (!vendor) {
      return res.status(404).json({
        status: "error",
        message: "Username or password is incorrect",
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, vendor.password);

    if (!isMatch) {
      return res.status(404).json({
        status: "error",
        message: "Username or password is incorrect",
      });
    }

    vendor = await User.findOne({ _id: vendor._id })
      .select({
        first_name: 1,
        last_name: 1,
      })
      .lean()
      .exec();

    const { token } = await generateJWT(vendor);

    res
      .status(200)
      .send({
        status: "success",
        message: "Vendor login Successful",
        token: token,
      });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
}

async function test(req, res) {
  return res.status(200).send({
    message: "This is a test API (Admin)",
  });
}

module.exports = {
  login,
  test,
};
