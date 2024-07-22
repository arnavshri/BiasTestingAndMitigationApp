const express = require('express');
const { getAnalysisResults, analyzeDatasetController } = require('../controllers/analysisController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:datasetId', authenticate, getAnalysisResults);
router.post('/analyze/:datasetId', authenticate, analyzeDatasetController);

module.exports = router;
