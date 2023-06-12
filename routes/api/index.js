const express = require("express");
const _ = express.Router();

const authentication= require("./auth.js")

_.use("/auth", authentication);

module.exports = _;
