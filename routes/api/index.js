const express = require("express");
const _ = express.Router();

const authentication= require("./auth.js")
const categoryRoutes = require("./category.js");
const merchantRoutes = require("./merchant.js");

_.use("/auth", authentication);
_.use("/merchant", merchantRoutes);
_.use("/category", categoryRoutes);

module.exports = _;
