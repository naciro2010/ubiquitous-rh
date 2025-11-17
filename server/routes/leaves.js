const express = require('express');
const router = express.Router();
const {
  getLeaves,
  getLeave,
  createLeave,
  updateLeave,
  approveLeave,
  rejectLeave
} = require('../controllers/leaveController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);

router.route('/')
  .get(getLeaves)
  .post(createLeave);

router.route('/:id')
  .get(getLeave)
  .put(updateLeave);

router.put('/:id/approve', authorize('admin', 'manager'), approveLeave);
router.put('/:id/reject', authorize('admin', 'manager'), rejectLeave);

module.exports = router;
