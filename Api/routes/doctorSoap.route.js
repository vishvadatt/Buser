const router = require('express').Router();
const soapCtrl = require('../controllers/doctorSoap.controller');
const { uploadS3 } = require("../helpers/commonfile");
router.route('/create_soapForm').post(soapCtrl.CreateSoapForm);
router.route('/detail-soapForm').post(soapCtrl.detailSoapForm);
router.route('/update-SoapForm/:id').put(soapCtrl.updateSoapForm);


module.exports = router;