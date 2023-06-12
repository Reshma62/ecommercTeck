const User = require("../../models/userModels.js");

const emailOtpVefiryMatch = async (req, res) => {
  const { Otp, email } = req.body;

  let findUser = await User.find({ email });

  if (findUser.length > 0) {
    if (findUser[0].OTP == Otp) {
      const removedOTpDb = await User.findOneAndUpdate(
        { email },
        { $unset: { OTP: "" } },
        { new: true }
      );

      return res.send({ success: "Opt Matched" });
    } else {
      return res.send({ error: "Opt Not Matched" });
    }
  }

  res.send(req.body);
};
module.exports = emailOtpVefiryMatch;
