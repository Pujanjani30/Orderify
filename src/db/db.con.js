require("dotenv").config();
// const { username, password } = require("../configs/db.config");

const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL)
    .then(() => console.log("MongoDb connected"))
    .catch((err) => console.log(err));

