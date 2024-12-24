const express = require("express");
const router = express.Router();


const userEx = require('./curdEx.js')
const userRoute = require('./users.js')
const queryRoute = require("./queryPara.js")


router.use('/userData',userRoute)
router.use('/myData',userEx)
router.use("/queryParams",queryRoute)

module.exports = router