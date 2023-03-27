const express = require("express");
const vendorController = require("../controller/vendor.controller");
const router = express.Router();
const Auth = require("../models/token");

async function AuthValidator(req, res, next) {
  let authBearer = req.headers["authorization"];
  if (!authBearer) {
    return res
      .status(403)
      .send({ status: "error", message: "Auth token not found" });
  }
  let authorization = authBearer.replace("Bearer ", "");
  if (!authorization) {
    return res.status(403).send({ status: "error", message: "Unauthorized" });
  }

  await Auth.verifyToken(authorization)
    .then((decodedToken) => {
      req.user_id = decodedToken._id;
    })
    .catch((err) => {
      return res.status(403).send({ status: "error", message: err.message });
    });

  next();
}

router.get("/test", vendorController.test);
router.post("/login", vendorController.login);
router.post("/register", vendorController.Register);


module.exports = router;