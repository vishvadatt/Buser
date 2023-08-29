const router = require('express').Router();
const intakeCtrl = require('../controllers/intakeForm.controller');
const { uploadS3 } = require("../helpers/commonfile");
router.route('/create_intakeForm').post(intakeCtrl.CreateIntakeForm);
router.route('/detail-intakeForm').post(intakeCtrl.detailIntakeForm);
router.route('/update-intakeForm/:id').put(intakeCtrl.updateIntakeForm);


module.exports = router;