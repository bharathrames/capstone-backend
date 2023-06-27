const express = require('express');
const { protect } = require('../middlewares/auth');
const { accessChat, fetchchats, createGroupChat, renameGroup, addToGroup, removeFromGroup } = require('../controllers/chat');

const router = express.Router()

 router.route("/").post(protect, accessChat);
 router.route("/").get(protect, fetchchats);
 router.route("/group").post(protect, createGroupChat);
 router.route("/rename").put(protect, renameGroup);
 router.route("/groupremove").put(protect, removeFromGroup);
 router.route("/groupadd").put(protect, addToGroup);

module.exports = router