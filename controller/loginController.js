const {
  emailValidation,
  passwordValidation,
} = require("../helpers/validation");
const bcrypt = require("bcrypt");
const User = require("../models/userModels.js");
const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.json({ error: "Email is required" });
  } else if (emailValidation(email)) {
    return res.json({ error: "Email is not valid, Please give valid email" });
  } else if (!password) {
    return res.json({ error: "Passord is required" });
  } else {
    let existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      bcrypt.compare(
        password,
        existingUser[0].password,
        function (err, result) {
          // result == true
          if (result) {
            return res.json({
              success: "Login successfull",
              userName: existingUser[0].fullName,
              userEmail: existingUser[0].email,
            });
          } else {
            return res.json({
              error: "Cradencitial not match",
            });
          }
        }
      );
    }
  }
};
const loginControllerStatus = (req, res) => {
  res.json({ success: "Registation successfull" });
};

module.exports = { loginController, loginControllerStatus };
