const Admin = require("../models/admin");
const User = require("../models/user");
const tokenSchema = require("../models/tokenSchema");
const Joi = require("joi");
const { generateJWT } = require("../models/token");
const bcrypt = require("bcrypt");

async function test(req, res) {
  return res.status(200).send({
    message: "This is a test API (Admin)",
  });
}

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

async function viewUserData(req, res) {
  let user = await User.find({ type: "user" }).lean().exec();

  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  return res.status(200).send({
    status: "success",
    data: user,
  });
}

async function viewDetails(req, res) {
  let user = await User.find({ _id: req.params.Id })
    .select({ first_name: 1, last_name: 1, email: 1, username: 1 })
    .lean()
    .exec();

  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  return res.status(200).send({
    status: "success",
    data: user,
  });
}

async function deleteData(req, res) {
  User.deleteOne(
    {
      _id: req.params.Id,
    },
    function (err, User) {
      if (err) res.send(err);
      res.json({ message: "User deleted successfully" });
    }
  );
}

async function viewVendorData(req, res) {
  let vendorData = await User.find({ type: "vendor" }).lean().exec();

  if (!vendorData) {
    return res
      .status(404)
      .json({ status: "error", message: "Vendor not found" });
  }
  return res.status(200).send({
    status: "success",
    data: vendorData,
  });
}

module.exports = {
  login,
  test,
  viewUserData,
  viewDetails,
  deleteData,
  viewVendorData,
};
