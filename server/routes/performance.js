const express = require('express');
const router = express.Router();
const { getReviews, getReview, createReview, updateReview } = require('../controllers/performanceController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.use(authorize('admin', 'manager'));

router.route('/').get(getReviews).post(createReview);
router.route('/:id').get(getReview).put(updateReview);

module.exports = router;
