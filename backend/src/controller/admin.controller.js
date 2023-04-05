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

async function forgotPassword(req, res) {
  const schema = Joi.object().keys({
    email: Joi.string().required().messages({
      "string.empty": "email cannot be an empty field",
      "any.required": "email is a required field",
    }),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(403).json({ status: "error", message: error.message });
  }

  let admin = await Admin.findOne({
    email: req.body.email,
  })
    .lean()
    .exec();

  if (!admin) {
    console.log("Email Id not found");
    return res
      .status(400)
      .send({ status: "error", message: "Email Id not found" });
  }

  try {
    var OTP = Math.round(Math.random() * (9999 - 1000) + 1000);

    var data = new tokenSchema({
      user_id: admin._id,
      token: OTP,
    });

    await data.save();
  } catch (error) {
    res.send({ status: "error", message: data });
  }

  admin = await Admin.findOne({ _id: admin._id })
    .select({ username: 1, email: 1 })
    .lean()
    .exec();

  return res.status(200).send({
    status: "success",
    message: "OTP Send Successfully",
    data: admin,
  });
}

async function resetPassword(req, res) {
  const token = await tokenSchema
    .findOne({
      token: req.body.token,
    })
    .lean()
    .exec();

  if (!token) {
    return res
      .status(400)
      .send({ status: "error", message: "Please Enter Valid OTP" });
  }

  // console.log(token);
  let password = req.body.password;

  const bcryptSalt = bcrypt.genSaltSync(10);
  const passwordHash = await bcrypt.hash(password, bcryptSalt);

  await Admin.updateOne(
    { _id: token.user_id },
    { $set: { password: passwordHash } }
  );

  let admin = await Admin.findOne({ _id: token.user_id })
    .select({ username: 1, email: 1 })
    .lean()
    .exec();

  await tokenSchema.deleteOne({ _id: token._id });

  return res.status(200).send({
    status: "success",
    message: "Password Changed Successfully",
    data: admin,
  });
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

async function totalUsers(req, res) {
  let user = await User.find({ type: "user" }).count().lean().exec();

  if (!user) {
    return res.status(404).send({
      status: "error",
      message: "No Data Found",
    });
  }

  return res.status(200).send({
    status: "success",
    total_users: user,
  });
}

async function totalVendors(req, res) {
  let vendor = await User.find({ type: "vendor" }).count().lean().exec();

  if (!vendor) {
    return res.status(404).send({
      status: "error",
      message: "No Data Found",
    });
  }

  return res.status(200).send({
    status: "success",
    total_vendors: vendor,
  });
}

module.exports = {
  test,
  login,
  forgotPassword,
  resetPassword,
  viewUserData,
  viewDetails,
  deleteData,
  viewVendorData,
  totalUsers,
  totalVendors,
};
