const { username, password } = require("../configs/db.config");

const mongoose = require("mongoose");

mongoose.connect(`mongodb://${username}:${password}@ac-crooikn-shard-00-00.4yaycgk.mongodb.net:27017,ac-crooikn-shard-00-01.4yaycgk.mongodb.net:27017,ac-crooikn-shard-00-02.4yaycgk.mongodb.net:27017/?ssl=true&replicaSet=atlas-7pjcfe-shard-0&authSource=admin&retryWrites=true&w=majority`)
    .then(() => console.log("MongoDb connected"))
    .catch((err) => console.log(err));

