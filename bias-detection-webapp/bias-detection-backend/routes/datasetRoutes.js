const express = require('express');
const { uploadDataset, getDatasets } = require('../controllers/datasetController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/upload', authenticate, uploadDataset);
router.get('/', authenticate, getDatasets);

module.exports = router;
