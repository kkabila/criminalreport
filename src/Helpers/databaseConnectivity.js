require('dotenv').config();
const mongoose = require("mongoose");
const db_url = "mongodb+srv://kkabila90:jIza5oqVY8yNP99j@cluster0.hnt8pts.mongodb.net/"
mongoose.connect(db_url, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", error => {
    console.log(error);
})

module.exports = db;
