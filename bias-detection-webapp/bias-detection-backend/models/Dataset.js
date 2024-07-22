const mongoose = require('mongoose');

const DatasetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  datasetFile: {
    type: String,
    required: true,
  },
  metadata: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model('Dataset', DatasetSchema);
