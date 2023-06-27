const express = require("express");
const { registeruser, authuser, alluser } = require("../controllers/user");
const { protect } = require("../middlewares/auth");

const router = express.Router()

router.route('/').get(protect, alluser)
 router.route('/').post(registeruser)
 router.route('/login').post(authuser)

module.exports = router;