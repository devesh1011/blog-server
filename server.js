const express = require("express");
const { connectDB } = require("./db/db");
require("dotenv").config();

const app = express();

app.listen(process.env.PORT, () => {
    connectDB(process.env.DB_URI)

  console.log(`Server is listening to PORT ${process.env.PORT}`);
});
