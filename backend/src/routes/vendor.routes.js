const express = require("express");
const vendorController = require("../controller/vendor.controller");
const router = express.Router();
const Auth = require("../models/token");
const multer = require("multer");

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

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

router.get("/test", vendorController.test);
router.post("/login", vendorController.login);
router.post("/register", vendorController.Register);
router.post("/addCategory", vendorController.addCategory);
router.post("/imageUpload", upload, vendorController.imageUpload);

module.exports = router;
