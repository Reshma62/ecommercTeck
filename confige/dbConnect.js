
const mongoose = require("mongoose");

const dbConnection = () =>
{
mongoose.connect(process.env.DB_URL).then(() => console.log("MongoDB Connected!"));
};

module.exports= dbConnection