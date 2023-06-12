const express = require("express");
const _ = express.Router();
const {
  registationControll, registationControllStatus,
} = require("../../controller/authController/resgistationController");
const emailOtpVefiryMatch = require( "../../controller/authController/emailOtpVerifyController" );
const { loginController } = require( "../../controller/authController/loginController" );

_.post("/registation", registationControll);
_.get("/registation", registationControllStatus);
_.post("/emailverification", emailOtpVefiryMatch);
_.post("/login", loginController);

module.exports = _;
