const router = require('express').Router();
const enquiryCtrl = require('../controllers/enquiry.controller');
const { protect } = require('../middleware/auth');

router.route('/create_ContactUs').post(enquiryCtrl.contactUs);


module.exports = router;