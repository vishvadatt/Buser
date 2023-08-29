const router = require('express').Router();
const dailyUpdateCtrl = require('../controllers/dailyUpdates.controller');
const { protect } = require('../middleware/auth');

router.route('/add-dailyUpdates').post(dailyUpdateCtrl.addDailyUpdates);
router.route('/user-dailyUpdateList/:id').get(dailyUpdateCtrl.dailyUpdateList);
router.route('/delete-dailyUpdates/:employeePainId').delete(dailyUpdateCtrl.deleteDailyUpdates);
router.route('/detail-dailyUpdates/:id').get(dailyUpdateCtrl.detailsDailyUpdates);
router.route('/update-UserdailyUpdates/:id').put(dailyUpdateCtrl.updateUserDailyUpdates);
router.route('/user-deleteAllDailyUpdates/:id').delete(dailyUpdateCtrl.deleteAllDailyUpdates);
router.route('/user-weeklyPainLevel/:id').get(dailyUpdateCtrl.userWeeklyPainLevel);
router.route('/user-averageWeeklyPainLevel/:id').get(dailyUpdateCtrl.averageWeeklyPainLevel);


module.exports = router;