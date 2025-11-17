const express = require('express');
const router = express.Router();
const {
  getAttendances,
  getAttendance,
  checkIn,
  checkOut,
  createAttendance,
  updateAttendance
} = require('../controllers/attendanceController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);

router.route('/')
  .get(getAttendances)
  .post(authorize('admin', 'manager'), createAttendance);

router.route('/:id')
  .get(getAttendance)
  .put(authorize('admin', 'manager'), updateAttendance);

router.post('/checkin', checkIn);
router.put('/checkout', checkOut);

module.exports = router;
