const AnalysisResult = require('../models/AnalysisResult');
const Dataset = require('../models/Dataset');
const { analyzeDataset } = require('../utils/mlModel');

const getAnalysisResults = async (req, res) => {
  const { datasetId } = req.params;
  const analysisResults = await AnalysisResult.findOne({ datasetId });
  res.json(analysisResults);
};

const analyzeDatasetController = async (req, res) => {
  const { datasetId } = req.params;

  try {
    const dataset = await Dataset.findById(datasetId);
    if (!dataset) {
      return res.status(404).json({ error: 'Dataset not found' });
    }

    const analysisData = await analyzeDataset(dataset.datasetFile);

    const analysisResult = new AnalysisResult({
      datasetId: dataset._id,
      analysisData,
    });

    await analysisResult.save();

    res.json(analysisResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAnalysisResults, analyzeDatasetController };
