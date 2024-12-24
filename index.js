const express = require("express");
const app = express();

const routes = require('./src/routes/index.route.js')
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/curd");

app.use('/',routes)


app.listen(3000, () => {
    console.log("Listing to port 3000");
});
