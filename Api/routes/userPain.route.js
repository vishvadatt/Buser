const router = require('express').Router();
const painCtrl = require('../controllers/userPain.controller');
const { protect } = require('../middleware/auth');

router.route('/user-painDetail').post(painCtrl.dailyPainUpdateDetails);
router.route('/user-painDetail-list').get(protect, painCtrl.userPainDetails);
router.route('/change-painDetail/:id').put(protect, painCtrl.updatePainDetails);
router.route('/findOne-painDetail/:id').get(protect, painCtrl.findOnePainDetail);
router.route('/delete-painDetail/:id').delete(protect, painCtrl.deletePainDetail);

router.route('/user-painList').get(painCtrl.painList);
router.route('/user-painDetailList/:id').get(painCtrl.user_painDetailList);


module.exports = router;