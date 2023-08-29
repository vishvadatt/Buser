const router = require('express').Router();
const userCtrl = require('../controllers/user.controller');
const { protect } = require('../middleware/auth');
const { uploadDocumentS3 } = require('../helpers/commonfile');

router.route('/get-users').get(protect, userCtrl.getAllUsers);
router.route('/update-user/:id').put(protect, userCtrl.updateUser);
router.route('/delete-user/:id').delete(protect, userCtrl.deleteUser);
router.route('/findone-user/:id').get(protect, userCtrl.findOneUser);
router.route('/user-uploadDocument/:id').post(protect, uploadDocumentS3.single("document"), userCtrl.userUploadDocument);
router.route('/search-users').get(userCtrl.searchUsers);
router.route('/search-doctors').get(userCtrl.searchDoctors);
router.route('/search-doctorChat').get(userCtrl.searchDoctorChat);
router.route('/search-allUsers').get(userCtrl.searchAllUsers)
router.route('/userList').get(userCtrl.userList)


module.exports = router;