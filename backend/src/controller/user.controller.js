const User = require("../models/user");
const tokenSchema = require("../models/tokenSchema");
const Joi = require("joi");
const { generateJWT } = require("../models/token");
const bcrypt = require("bcrypt");

async function login(req, res) {
  /**
   * @swagger
   * /login:
   *  post:
   *    summary: Login API
   *    description: This is Login API
   *    responses:
   *          200:
   *              description: user found
   */

  const { username, email, password, type } = req.body;
  try {
    let user;
    if (email || username) {
      // user = await User.findOne({ username: username });
      user = await User.findOne({
        $and: [
          {
            $or: [{ email: username }, { username: username }],
          },
          { type: type },
        ],
      })
        .lean()
        .exec();
    }

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Username or password is incorrect",
      });
    }

    //Compare password with bcrypt
    // const isMatch = await bcrypt.compare(req.body.password, user.password);
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({
        status: "error",
        message: "Username or password is incorrect",
      });
    }

    user = await User.findOne({ _id: user._id })
      .select({
        first_name: 1,
        last_name: 1,
      })
      .lean()
      .exec();

    const { token } = await generateJWT(user);

    res.status(200).send({
      status: "success",
      message: "user login Successful",
      token: token,
    });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
}

async function userRegister(req, res) {
  /**
   * @swagger
   * /register:
   *  post:
   *    summary: Register API
   *    description: This is Register API
   *    responses:
   *          200:
   *              description: To test Get API documentation
   */

  try {
    const schema = Joi.object().keys({
      first_name: Joi.string()
        // .regex(/^[a-zA-Z]*$/)
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
      username: Joi.string().required().min(3).max(15).required().messages({
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
        "any.required": "password is a required field",
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

    let user = await User.findOne({
      $and: [
        {
          $or: [{ email: req.body.email }, { username: req.body.username }],
        },
        { type: req.body.type },
      ],
    })
      .lean()
      .exec();

    if (user) {
      return res.status(400).send({
        status: "error",
        message: "Email or Username already exists",
      });
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
      message: "User Registration Successful ",
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

async function fetchData(req, res) {
  // console.log(req.user_id);
  let user = await User.findOne({ _id: req.user_id }).lean().exec();
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  user = await User.findOne({ _id: user._id })
    .select({ first_name: 1, last_name: 1 })
    .lean()
    .exec();

  return res.status(200).send({
    status: "success",
    message: "Your profile",
    data: user,
  });
}

async function getData(req, res) {
  let user = await User.find().lean().exec();
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  return res.status(200).send({
    status: "success",
    data: user,
  });
}

async function updateProfile(req, res) {
  // console.log("req.user_id = " + req.user_id);

  let user = await User.findOne({ _id: req.user_id }).lean().exec();
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  const schema = Joi.object().keys({
    first_name: Joi.string()
      // .regex(/^[a-zA-Z]*$/)
      .regex(/^[a-zA-Z]*$/, "Characters only allowed in name")
      .min(3)
      .max(30)
      .messages({
        "string.comments": "first_name should be a type of text",
        "string.empty": "first_name cannot be an empty field",
        "string.min": "first_name should have a minimum length of 3",
        "string.max": "first_name should have a maximum length of 30",
      }),
    last_name: Joi.string()
      .regex(/^[a-zA-Z]*$/)
      .min(3)
      .max(30)
      .messages({
        "string.base": "last_name should be a type of text",
        "string.empty": "last_name cannot be an empty field",
        "string.min": "last_name should have a minimum length of 3",
        "string.max": "last_name should have a maximum length of 30",
      }),
  });

  const { value, error } = schema.validate(req.body);

  if (error) {
    return res.status(403).json({ status: "error", message: error.message });
  }
  // await User.updateOne({ _id: user._id }, { $set: { ...req.body } });

  await User.updateOne({ _id: user._id }, { $set: { ...value } });

  user = await User.findOne({ _id: user._id })
    .select({ first_name: 1, last_name: 1 })
    .lean()
    .exec();

  return res.status(200).send({
    status: "success",
    message: "User profile updated",
    data: user,
  });
}

async function changeUsername(req, res) {
  // console.log("req.user_id = " + req.user_id);

  let user = await User.findOne({ _id: req.user_id }).lean().exec();
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  const schema = Joi.object().keys({
    username: Joi.string().required().min(3).required().messages({
      "string.base": "username should be a type of text",
      "string.empty": "username cannot be an empty field",
      "string.min": "username should have a minimum length of 3",
      "any.required": "username is a required field",
    }),
  });

  const { value, error } = schema.validate(req.body);

  if (error) {
    return res.status(403).json({ status: "error", message: error.message });
  }

  if (user.username !== value.username) {
    let sameUsername = await User.findOne({
      _id: { $ne: user._id },
      username: value.username,
    });
    if (sameUsername) {
      return res
        .status(400)
        .json({ status: "error", message: "Username already exists" });
    }
  }

  await User.updateOne(
    { _id: user._id },
    { $set: { username: value.username } }
  );

  user = await User.findOne({ _id: user._id })
    .select({ first_name: 1, last_name: 1 })
    .lean()
    .exec();

  return res.status(200).send({
    status: "success",
    message: "Username Changed Successfully",
    data: user,
  });
}

async function changeEmail(req, res) {
  // console.log(req.user_id);
  let user = await User.findOne({ _id: req.user_id }).lean().exec();
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  const schema = Joi.object().keys({
    email: Joi.string().required().messages({
      "string.empty": "email cannot be an empty field",
      "any.required": "email is a required field",
    }),
  });

  const { value, error } = schema.validate(req.body);

  if (error) {
    return res.status(403).json({ status: "error", message: error.message });
  }

  if (user.email !== value.email) {
    let sameEmail = await User.findOne({
      _id: { $ne: user._id },
      email: value.email,
    });
    if (sameEmail) {
      return res
        .status(400)
        .json({ status: "error", message: "Email Id already exists" });
    }
  }

  await User.updateOne({ _id: user._id }, { $set: { email: req.body.email } });

  user = await User.findOne({ _id: user._id })
    .select({ first_name: 1, last_name: 1 })
    .lean()
    .exec();

  return res.status(200).send({
    status: "success",
    message: "Email Id Changed Successfully",
    data: user,
  });
}

async function changePassword(req, res) {
  let user = await User.findOne({ _id: req.user_id }).lean().exec();
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  const isMatch = await bcrypt.compare(req.body.old_password, user.password);

  if (!isMatch) {
    return res.status(404).json({
      status: "error",
      message: "Old password not match",
    });
  }

  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  await User.updateOne({ _id: user._id }, { $set: { password: password } });

  user = await User.findOne({ _id: user._id })
    .select({ first_name: 1, last_name: 1 })
    .lean()
    .exec();

  return res.status(200).send({
    status: "success",
    message: "Password Changed Successfully",
    data: user,
  });
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

  let user = await User.findOne({
    email: req.body.email,
  })
    .lean()
    .exec();

  if (!user) {
    console.log("Email Id not found");
    return res
      .status(400)
      .send({ status: "error", message: "Email Id not found" });
  }

  try {
    var OTP = Math.round(Math.random() * (9999 - 1000) + 1000);

    var data = new tokenSchema({
      user_id: user._id,
      token: OTP,
    });

    await data.save();
  } catch (error) {
    res.send({ status: "error", message: data });
  }

  user = await User.findOne({ _id: user._id })
    .select({ first_name: 1, last_name: 1 })
    .lean()
    .exec();

  return res.status(200).send({
    status: "success",
    message: "OTP Send Successfully",
    data: user,
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

  await User.updateOne(
    { _id: token.user_id },
    { $set: { password: passwordHash } }
  );

  let user = await User.findOne({ _id: token.user_id })
    .select({ first_name: 1, last_name: 1 })
    .lean()
    .exec();

  await tokenSchema.deleteOne({ _id: token._id });

  return res.status(200).send({
    status: "success",
    message: "Password Changed Successfully",
    data: user,
  });
}

async function deleteUserData(req, res) {
  User.deleteOne(
    {
      _id: req.params.userId,
    },
    function (err, User) {
      if (err) res.send(err);
      res.json({ message: "User deleted successfully" });
    }
  );
}

async function editUserData(req, res) {
  console.log(req.user_id);
  let user = await User.findOne({ _id: req.user_id }).lean().exec();
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  user = await User.findOne({ _id: req.params.userId })
    .select({ first_name: 1, last_name: 1, email: 1, username: 1 })
    .lean()
    .exec();

  if (!user) {
    return res.status(400).send({ status: "error", message: "No Data Found" });
  }

  return res.status(200).send({
    status: "success",
    data: user,
  });
}

async function viewUserDetails(req, res) {
  let user = await User.find({ _id: req.params.userId })
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

// Login Part

async function loginData(req, res) {
  // console.log(req.user_id);
  let user = await User.findOne({ _id: req.user_id }).lean().exec();
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  user = await User.findOne({ _id: user._id })
    .select({ first_name: 1, last_name: 1 })
    .lean()
    .exec();

  return res.status(200).send({
    status: "success",
    data: user,
  });
}

async function test(req, res) {
  return res.status(200).send({
    message: "This is a test API",
  });
}

module.exports = {
  test,
  login,
  userRegister,
  fetchData,
  getData,
  updateProfile,
  changeUsername,
  changeEmail,
  changePassword,
  forgotPassword,
  resetPassword,
  deleteUserData,
  editUserData,
  viewUserDetails,
  loginData,
};
