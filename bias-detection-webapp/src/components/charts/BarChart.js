// src/components/charts/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data, options }) => {
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

  return <Bar data={data} options={mergedOptions} />;
};

export default BarChart;
