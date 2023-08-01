const express = require("express");
const _ = express.Router();
const { securedProduct, createProduct, createVariant } = require( "../../controller/productControler" );

_.post("/createproduct", securedProduct, createProduct);
_.post("/createvariant",createVariant);

module.exports = _;