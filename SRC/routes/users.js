const express = require("express");
const router = express.Router();
const userModel = require("../models/users.js");
const { getUser, getUserRead, getUserDeleteById, getUserUpdateById, getUserFindById } = require("../controller/users.js");

router.post('/',getUser)
router.get('/',getUserRead)
router.post('/:id',getUserFindById)
router.put('/:id',getUserUpdateById)
router.delete('/:id',getUserDeleteById)

module.exports = router