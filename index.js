require("dotenv").config();
const express = require("express");
const app = express();
const dbConnection = require("./confige/dbConnect");
const routes = require("./routes");
app.use(express.json());
dbConnection();
app.use( routes );




app.listen(8000, () => {
  console.log("Server Is Running");
});
