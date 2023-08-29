const router = require('express').Router();
const chatCtrl = require('../controllers/chat.controller');
const { protect } = require('../middleware/auth');

router.route('/userSendFriendRequest').post(protect, chatCtrl.userSendFriendRequest);
router.route('/AcceptedFriendRequest').post(chatCtrl.AcceptedFriendRequest);
router.route('/totalFriendRequest/:id').get(protect, chatCtrl.totalFriendRequest);
router.route('/myfriendList/:id').get(protect, chatCtrl.myfriendList);

module.exports = router;