const express = require("express");
const userController = require("../controller/user.controller");
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

router.get("/test", userController.test);
router.post("/login", userController.login);
router.post("/register", userController.userRegister);
router.get("/fetchData", AuthValidator, userController.fetchData);
router.get("/getData", userController.getData);
router.put("/update-profile", AuthValidator, userController.updateProfile);
router.put("/change-username", AuthValidator, userController.changeUsername);
router.put("/change-email", AuthValidator, userController.changeEmail);
router.put("/change-password", AuthValidator, userController.changePassword);
router.post("/forgot-password", userController.forgotPassword);
router.post("/reset-password", userController.resetPassword);
router.delete("/delete-user-data/:userId", userController.deleteUserData);
router.put(
  "/edit-user-data/:userId",
  AuthValidator,
  userController.editUserData
);
router.get("/view-user-details/:userId", userController.viewUserDetails);
router.get("/login-data/", AuthValidator, userController.loginData);

module.exports = router;
