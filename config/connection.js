const mongoose = require('mongoose');

var db = mongoose.connect("mongodb+srv://aeolustechlabs:kannanKunal@123@cluster0-fqo84.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
mongoose.connection.on("connected", () => {
    console.log("Successfully connected to the database");
})
mongoose.connection.on("disconnected", () => {
    console.log('Could not connect to the database ');
    process.exit();
})
mongoose.connection.on("error", () => {
    console.log('error while connecting to the database ');
    process.exit(1);
})
module.exports = db;