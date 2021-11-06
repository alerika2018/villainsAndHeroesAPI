// const mongoose = require('mongoose')

// const db = `mongodb+srv://alerika:shannon7@cluster0.id1ka.mongodb.net/endgame?retryWrites=true&w=majority`;

// mongoose.connect(db)

// const dbConnected = mongoose.connection
// dbConnected.on("error",console.error.bind(console, "MongoDB connection error:"))
// module.exports = dbConnected

const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://alerika:shannon7@cluster0.id1ka.mongodb.net/endgame?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoDB);
