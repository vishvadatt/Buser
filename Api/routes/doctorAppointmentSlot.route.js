const router = require('express').Router();
const appointmentSlotCtrl = require('../controllers/doctorAppointmentSlot.controller');
router.route('/doctorSlotList/:id').post(appointmentSlotCtrl.doctorSlotList);
router.route('/doctorSlotDetails/:id').get(appointmentSlotCtrl.doctorSlotDetails);
router.route('/doctorBookAppointmentList/:id').post(protect, appointmentSlotCtrl.doctorBookAppointmentList);
router.route('/doctorBookAppointmentDetails/:id').get(protect, appointmentSlotCtrl.doctorBookAppointmentDetails);
router.route('/BookedAppointmentPatientDetails/:id').post(appointmentSlotCtrl.BookedAppointmentPatientDetails);
router.route('/doctorPatientRecords/:id').get(appointmentSlotCtrl.doctorPatientRecords);

module.exports = router;