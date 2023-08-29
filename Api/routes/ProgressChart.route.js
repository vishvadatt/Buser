const router = require('express').Router();
const planCtrl = require('../controllers/ProgressChart');

router.route('/getChartDetails/:id').post(planCtrl.chartsData);
router.route('/getPainFrequencyDetails/:id').post(planCtrl.getPainFrequencyDetails);

module.exports = router;