const express = require("express");
const adminController = require("../controller/admin.controller");
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
router.get("/test", adminController.test);
router.post("/login", adminController.login);
router.get("/viewUserData", adminController.viewUserData);
router.get("/viewDetails/:Id", adminController.viewDetails);
router.delete("/deleteData/:Id", adminController.deleteData);
router.get("/viewVendorData", adminController.viewVendorData);


module.exports = router;
