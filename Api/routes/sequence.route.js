const router = require('express').Router();
const sequenceCtrl = require('../controllers/sequence.controller');
const { uploadSequence } = require("../helpers/commonfile");
router.route('/user-createSequence').post(uploadSequence.single("uploadSequence"), sequenceCtrl.createSequence);
router.route('/user-sequenceList/:id').get(sequenceCtrl.SequenceList);
router.route('/user-deleteSequence/:id').delete(sequenceCtrl.deleteSequence);

// router.route('/detail-userSequence/:id').get(sequenceCtrl.detailNutition);
// router.route('/update-userSequence/:id').put(uploadNutrition.single("uploadNutrition"), sequenceCtrl.updateNutition);


module.exports = router;