const express = require('express');
const router = express.Router();
const { getPayrolls, getPayroll, createPayroll, updatePayroll } = require('../controllers/payrollController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.use(authorize('admin', 'manager'));

router.route('/').get(getPayrolls).post(createPayroll);
router.route('/:id').get(getPayroll).put(updatePayroll);

module.exports = router;
