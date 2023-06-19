const express = require("express");
const { becomeMerchantController } = require( "../../controller/becomeMerchant" );
const _ = express.Router();

_.post("/becomemerchant",becomeMerchantController)


module.exports = _;