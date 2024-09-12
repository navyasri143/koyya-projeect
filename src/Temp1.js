import React from 'react';
import './Barchart.css'; // Import CSS for styling

const BarChart = ({ data }) => {
  return (
    <div className="bar-chart-container">
      {data.map((temp, index) => (
        <div key={index} className="bar" style={{ height: `${temp * 10}px` }}>
          <span className="temp-value">{temp}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
