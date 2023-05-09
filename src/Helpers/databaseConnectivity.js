require('dotenv').config();
const mongoose = require("mongoose");
const db_url = "mongodb+srv://hakizimanairene73:vXTcJGRXT2qZWiBW@bootcamp.b7wy9ic.mongodb.net/criminalreport"
mongoose.connect(db_url, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", error => {
    console.log(error);
})

module.exports = db;