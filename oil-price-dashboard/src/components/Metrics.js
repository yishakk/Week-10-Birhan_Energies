import React from 'react';

const Metrics = ({ metrics }) => {
  return (
    <div className="metrics">
      <h3>Model Performance Metrics</h3>
      <p>MAE: {metrics.mae}</p>
      <p>RMSE: {metrics.rmse}</p>
      <p>Volatility: {metrics.volatility}</p>
    </div>
  );
};

export default Metrics; // Ensure default export