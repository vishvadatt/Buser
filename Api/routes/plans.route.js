const router = require('express').Router();
const planCtrl = require('../controllers/plans.controller');

router.route('/getPlan').get(planCtrl.getPlan);
// router.route('/dashbord-plan').get(planCtrl.getDashbordPlan);
router.route('/user-painDetail').post(planCtrl.dailyPainUpdateDetails);
router.route('/getAllPlans').get(planCtrl.getAllPlans);
router.route('/clientGetPlan/:id').get(planCtrl.clientGetPlan);

module.exports = router;