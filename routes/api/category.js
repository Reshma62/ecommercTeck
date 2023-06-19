const express = require("express");
const _ = express.Router();
const { createCategory, createSubCategory, getAllCategory, getAllSubCategory } = require( "../../controller/categoryController" );


_.post("/createcategory", createCategory);
_.post("/createsubcategory", createSubCategory);
_.get("/getallcategory", getAllCategory);
_.get("/getallsubcategory", getAllSubCategory);

module.exports = _;
