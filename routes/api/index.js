const express = require("express");
const _ = express.Router();

const authentication= require("./auth.js")
const categoryRoutes = require("./category.js");

_.use("/auth", authentication);
_.use("/category", categoryRoutes);

module.exports = _;
