const express = require("express");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/curd");

//Import routes
const userEx = require('./SRC/routes/curdEx.js')
const userRoute = require('./SRC/routes/users.js')
const queryRoute = require("./SRC/routes/queryPara.js")

//routes
app.use('/userData',userRoute)
app.use('/myData',userEx)
app.use("/queryParams",queryRoute)


app.listen(3000, () => {
    console.log("Listing to port 3000");
});
