const express = require('express');
const router = express.Router();
const { getJobs, getJob, createJob, updateJob } = require('../controllers/recruitmentController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.use(authorize('admin', 'manager'));

router.route('/').get(getJobs).post(createJob);
router.route('/:id').get(getJob).put(updateJob);

module.exports = router;
