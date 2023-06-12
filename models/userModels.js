const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Avatar: {
    type: String,
  },
  phone: {
    type: String,
  },
  addressOne: {
    type: String,
  },
  adddressTwo: {
    type: String,
  },
  role: {
    type: String,
    enum: ["member", "admin", "merchant"],
    default: "member",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  merchant: {
    type: Boolean,
    default: false,
  },
  facebookId: {
    type: String,
  },
  linkdinId: {
    type: String,
  },
  OTP: {
    type: String,
  },
});
module.exports = mongoose.model("User", userSchema);
