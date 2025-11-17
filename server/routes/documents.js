const express = require('express');
const router = express.Router();
const { getDocuments, getDocument, uploadDocument, deleteDocument } = require('../controllers/documentController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.route('/').get(getDocuments).post(uploadDocument);
router.route('/:id').get(getDocument).delete(deleteDocument);

module.exports = router;
