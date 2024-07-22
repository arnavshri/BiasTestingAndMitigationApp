// src/pages/DashboardPage.js
import React, { useEffect, useState } from 'react';
import ws from '../utils/websocket';
import AnalysisResults from '../components/AnalysisResults';

const DashboardPage = () => {
  const [results, setResults] = useState({ labels: [], data: [] });

  useEffect(() => {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setResults(data);
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Dashboard</h1>
          <AnalysisResults results={results} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
