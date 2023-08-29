const router = require('express').Router();
const labCtrl = require('../controllers/labReports.controller');
const { uploadS3 } = require("../helpers/commonfile");
router.route('/user-addLabReports').post(uploadS3.single("report"), labCtrl.addLabReport);
router.route('/user-labReportList/:id').get(labCtrl.LabReportList);
router.route('/user-deletelabReport/:id').delete(labCtrl.deleteLabReport);
router.route('/detail-labReports/:id').get(labCtrl.detailLabReport);
router.route('/update-labReports/:id').put(uploadS3.single("report"), labCtrl.updateLapReport);


module.exports = router;