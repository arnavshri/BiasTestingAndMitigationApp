// src/components/AnalysisResults.js
import React from 'react';
import BarChart from './charts/BarChart';

const AnalysisResults = ({ results }) => {
  const data = {
    labels: results.labels,
    datasets: [
      {
        label: 'Bias Detection Results',
        data: results.data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Analysis Results</h2>
      <BarChart data={data} />
    </div>
  );
};

export default AnalysisResults;
