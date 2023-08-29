const router = require('express').Router();
const equipmentCtrl = require('../controllers/equipment.controller');
const { protect } = require('../middleware/auth');

router.route('/getEquipmentList').post(equipmentCtrl.getEquipment);
router.route('/equipment-list').get(protect, equipmentCtrl.fetchEquipment);

module.exports = router;