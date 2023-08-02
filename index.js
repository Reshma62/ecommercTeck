require("dotenv").config();
const express = require("express");
const app = express();
const dbConnection = require("./confige/dbConnect");
const routes = require( "./routes" );
const path = require("path");
app.use(express.json());
dbConnection();
app.use( routes );
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



app.listen(8000, () => {
  console.log("Server Is Running");
});
