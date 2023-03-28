const Admin = require("../models/admin");
const tokenSchema = require("../models/tokenSchema");
const Joi = require("joi");
const { generateJWT } = require("../models/token");
const bcrypt = require("bcrypt");

async function login(req, res) {
  try {
    let admin = await Admin.findOne({
      $or: [{ email: req.body.username }, { username: req.body.username }],
    })
      .lean()
      .exec();

    if (!admin) {
      return res.status(404).json({
        status: "error",
        message: "Username or password is incorrect",
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, admin.password);

    if (!isMatch) {
      return res.status(404).json({
        status: "error",
        message: "Username or password is incorrect",
      });
    }

    admin = await Admin.findOne({ _id: admin._id })
      .select({
        first_name: 1,
        last_name: 1,
      })
      .lean()
      .exec();

    const { token } = await generateJWT(admin);

    res.status(200).send({
      status: "success",
      message: "Admin login Successful",
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
