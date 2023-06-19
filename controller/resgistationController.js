const {
  emailValidation,
  passwordValidation,
} = require("../helpers/validation");
const bcrypt = require("bcrypt");
const User = require("../models/userModels.js");
const emailVerification = require("../helpers/emailVerification");
const otpGenarator = require("../helpers/otp");
const emailTemplate = require("../helpers/emailTemplate");
const registationControll = async (req, res) => {
  const {
    fullName,
    email,
    password,
    Avatar,
    phone,
    addressOne,
    adddressTwo,
    role,
    createdAt,
    updatedAt,
    emailVerified,
    merchant,
    facebookId,
    linkdinId,
  } = req.body;

  if (!fullName) {
    return res.json({ error: "Full name is required" });
  } else if (!email) {
    return res.json({ error: "Email is required" });
  } else if (emailValidation(email)) {
    return res.json({ error: "Email is not valid, Please give valid email" });
  } else if (!password) {
    return res.json({ error: "Passord is required" });
  } else {
    /*  else if ( passwordValidation( password ) )
  {
    return res.json({
      error: "Password is weak, give capital, small , number and symbol",
    });
  } */

    let duplicateUser = await User.find({ email });
    if (duplicateUser.length > 0) {
      return res.json({
        error: "Email already exits",
      });
    }
    bcrypt.hash(password, 10, async function (err, hash) {
      let user = new User({
        fullName,
        email,
        password: hash,
        Avatar,
        phone,
        addressOne,
        adddressTwo,
        role,
        createdAt,
        updatedAt,
        emailVerified,
        merchant,
        facebookId,
        linkdinId,
      });
      user.save();
      const randomOtp = otpGenarator();
      emailVerification(
        user.email,
        emailTemplate(randomOtp, user.fullName),
        "Email verification for Login"
      );
      let otpStore = await User.findOneAndUpdate(
        { email },
        { $set: { OTP: randomOtp } },
        { new: true }
      );
      setTimeout(async () => {
        console.log("Otp removed");
        let otpRemove = await User.findOneAndUpdate(
          { email },
          { $unset: { OTP: "" } },
          { new: true }
        );
      }, 10000000);

      return res.json({ success: "Registation successfull" });
    });
  }
};
const registationControllStatus = (req, res) => {
  res.json({ success: "Registation successfull" });
};

module.exports = { registationControll, registationControllStatus };
