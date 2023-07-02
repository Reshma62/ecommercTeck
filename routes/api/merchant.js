const express = require("express");
const { becomeMerchantController, merchantStatus } = require( "../../controller/becomeMerchant" );
const _ = express.Router();

_.post("/becomemerchant",becomeMerchantController)
_.post("/merchantstatus", merchantStatus);


module.exports = _;