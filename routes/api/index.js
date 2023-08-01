const express = require("express");
const _ = express.Router();

const authentication= require("./auth.js")
const categoryRoutes = require("./category.js");
const merchantRoutes = require("./merchant.js");
const productRoutes = require("./product.js");

_.use("/auth", authentication);
_.use("/merchant", merchantRoutes);
_.use("/category", categoryRoutes);
_.use("/product", productRoutes);

module.exports = _;
