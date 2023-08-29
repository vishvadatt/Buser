const router = require('express').Router();
const educationCtrl = require('../controllers/educationalMaterial.controller');
const { protect } = require('../middleware/auth');

router.route('/getEducationMaterialList').get(educationCtrl.getEducationMaterialList);
router.route('/Education-Product').post(educationCtrl.purchaseEducationProduct);
router.route('/ProductPurchaseDetails').post(educationCtrl.ProductPurchaseDetails);
router.route('/myPurchaseProductList').get(protect, educationCtrl.myPurchaseProductList);


module.exports = router;