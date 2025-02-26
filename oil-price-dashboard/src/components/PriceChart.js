import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Label,
} from 'recharts';

const PriceChart = ({ historicalData, forecastData, events }) => {
  // Merge historical and forecast data
  const combinedData = [...historicalData, ...forecastData];

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={combinedData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            name="Historical Prices"
            stroke="#8884d8"
          />
          <Line
            type="monotone"
            dataKey="forecast"
            name="Forecasted Prices"
            stroke="#82ca9d"
            strokeDasharray="5 5"
          />
          {/* Add event markers */}
          {events.map((event) => (
            <ReferenceLine
              key={event.date}
              x={event.date}
              stroke="red"
              label={<Label value={event.type} position="top" />}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart; // Ensure default export