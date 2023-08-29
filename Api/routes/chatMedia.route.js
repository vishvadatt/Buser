const router = require('express').Router();
const chatCtrl = require('../controllers/chatMedia.controller');

router.route('/fetchChatMediaList/:id').get(chatCtrl.fetchChatMediaList);

module.exports = router;