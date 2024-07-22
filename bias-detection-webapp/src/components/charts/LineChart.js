// src/components/charts/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data, options }) => {
  const defaultOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return <Line data={data} options={mergedOptions} />;
};

export default LineChart;
