const router = require('express').Router();
const galleryCtrl = require('../controllers/photosGallery.controller');
const { uploadPhotos } = require("../helpers/commonfile");
router.route('/user-uploadPhotos').post(uploadPhotos.single("photos"), galleryCtrl.addGalleryPhoto);
router.route('/user-photoList/:id').get(galleryCtrl.PhotoList);
router.route('/user-deletePhoto/:id').delete(galleryCtrl.deletePhoto);
router.route('/detail-userphotos/:id').get(galleryCtrl.detailUserPhotos);
router.route('/update-userPhotos/:id').put(uploadPhotos.single("photos"), galleryCtrl.updateUserPhotos);


module.exports = router;