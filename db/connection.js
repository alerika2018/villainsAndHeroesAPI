

const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://user:password@cluster0.id1ka.mongodb.net/database_name?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoDB);
