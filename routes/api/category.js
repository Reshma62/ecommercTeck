const express = require("express");
const _ = express.Router();
const { createCategory, createSubCategory, getAllCategory, getAllSubCategory, categoryStatus, subCategoryStatus } = require( "../../controller/categoryController" );


_.post("/createcategory", createCategory);
_.post("/categorystatus", categoryStatus);
_.post("/createsubcategory", createSubCategory);
_.post("/subcategorystatus", subCategoryStatus);
_.get("/getallcategory", getAllCategory);
_.get("/getallsubcategory", getAllSubCategory);

module.exports = _;
