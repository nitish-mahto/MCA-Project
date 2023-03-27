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
          $or: [{ email: req.body.username }, { username: req.body.username }],
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

async function Register(req, res) {
  try {
    const schema = Joi.object().keys({
      first_name: Joi.string()
        .regex(/^[a-zA-Z]*$/, "Characters only allowed in name")
        .min(3)
        .max(30)
        .required()
        .messages({
          "string.comments": "first_name should be a type of text",
          "string.empty": "first_name cannot be an empty field",
          "string.min": "first_name should have a minimum length of 3",
          "string.max": "first_name should have a maximum length of 30",
          "any.required": "first_name is a required field",
        }),
      last_name: Joi.string()
        .regex(/^[a-zA-Z]*$/)
        .min(3)
        .max(30)
        .required()
        .messages({
          "string.base": "last_name should be a type of text",
          "string.empty": "last_name cannot be an empty field",
          "string.min": "last_name should have a minimum length of 3",
          "string.max": "last_name should have a maximum length of 30",
          "any.required": "last_name is a required field",
        }),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required()
        .messages({
          "string.empty": "email cannot be an empty field",
          "any.required": "email is a required field",
        }),
      username: Joi.string().min(3).max(15).required().messages({
        "string.base": "username should be a type of text",
        "string.empty": "username cannot be an empty field",
        "string.min": "username should have a minimum length of 3",
        "string.max": "username should have a maximum length of 15",
        "any.required": "username is a required field",
      }),
      password: Joi.string().required().min(5).max(16).messages({
        "string.empty": "password cannot be an empty field",
        "string.min": "password should have a minimum length of 5",
        "string.max": "password should have a maximum length of 16",
      }),
      type: Joi.string().required().messages({
        "string.empty": "type cannot be an empty field",
        "any.required": "type is a required field",
      }),
    });

    const { value, error } = schema.validate(req.body);

    if (error) {
      return res.status(403).json({ status: "error", message: error.message });
    }

    let vendor = await User.findOne({
      $and: [
        {
          $or: [{ email: req.body.username }, { username: req.body.username }],
        },
        { type: req.body.type },
      ],
    })
      .lean()
      .exec();

    if (vendor) {
      return res
        .status(400)
        .send({ status: "error", message: "Email or Username already exists" });
    }

    let newUser = new User(value);
    await newUser.save();

    newUser = await User.findOne({ _id: newUser._id })
      .select({
        first_name: 1,
        last_name: 1,
        type: 1,
      })
      .lean()
      .exec();

    const { token } = await generateJWT(newUser);

    return res.status(200).json({
      status: "success",
      message: "Vendor Registration Successful ",
      token: token,
      data: newUser,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

async function test(req, res) {
  return res.status(200).send({
    message: "This is a test API (Vendor)",
  });
}

module.exports = {
  login,
  Register,
  test,
};
