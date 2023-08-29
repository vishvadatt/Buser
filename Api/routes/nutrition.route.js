const router = require('express').Router();
const nutitionCtrl = require('../controllers/nutrition.controller');
const { uploadNutrition } = require("../helpers/commonfile");
router.route('/user-createNutrition').post(uploadNutrition.single("uploadNutrition"), nutitionCtrl.createNutition);
router.route('/user-nutritionList/:id').get(nutitionCtrl.NutitionList);
router.route('/user-deleteNutrition/:id').delete(nutitionCtrl.deleteNutition);
router.route('/detail-userNutrition/:id').get(nutitionCtrl.detailNutition);
router.route('/update-userNutrition/:id').put(uploadNutrition.single("uploadNutrition"), nutitionCtrl.updateNutition);


module.exports = router;