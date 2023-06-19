const express = require("express");
const _ = express.Router();
const {
  registationControll,
  registationControllStatus,
} = require("../../controller/resgistationController");
const emailOtpVefiryMatch = require("../../controller/emailOtpVerifyController");
const { loginController } = require("../../controller/loginController");

_.post("/registation", registationControll);
_.get("/registation", registationControllStatus);
_.post("/emailverification", emailOtpVefiryMatch);
_.post("/login", loginController);

module.exports = _;
