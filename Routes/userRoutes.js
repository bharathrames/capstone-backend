const express = require("express");
const { registeruser } = require("../controllers/user");

const router = express.Router()

 router.route('/').post(registeruser)
// router.route('/login', authuser)

module.exports = router;