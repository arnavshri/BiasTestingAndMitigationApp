const Dataset = require('../models/Dataset');
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage }).single('datasetFile');

const uploadDataset = async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ error: 'File upload failed' });
    }

    const { metadata } = req.body;

    try {
      const dataset = new Dataset({
        userId: req.user.userId,
        datasetFile: req.file.path,
        metadata: JSON.parse(metadata),
      });
      await dataset.save();

      res.status(201).json({ message: 'Dataset uploaded successfully', dataset });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
};

const getDatasets = async (req, res) => {
  const datasets = await Dataset.find({ userId: req.user.userId });
  res.json(datasets);
};

module.exports = { uploadDataset, getDatasets };
