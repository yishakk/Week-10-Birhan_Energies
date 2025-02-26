import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PriceChart from './components/PriceChart'; // Ensure correct import path
import EventHighlights from './components/EventHighlights'; // Ensure correct import path
import Filters from './components/Filters'; // Ensure correct import path
import Metrics from './components/Metrics'; // Ensure correct import path

const Dashboard = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const [events, setEvents] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [metrics, setMetrics] = useState({});
  const [dateRange, setDateRange] = useState({ start: '2012-01-01', end: '2022-12-31' });
  const [selectedEventType, setSelectedEventType] = useState('all');

  useEffect(() => {
    // Fetch data from Flask API
    axios.get('http://localhost:5000/api/historical')
      .then((res) => setHistoricalData(res.data));
    axios.get('http://localhost:5000/api/events')
      .then((res) => setEvents(res.data));
    axios.get('http://localhost:5000/api/forecast')
      .then((res) => setForecastData(res.data));
    axios.get('http://localhost:5000/api/metrics')
      .then((res) => setMetrics(res.data));
  }, []);

  return (
    <div className="dashboard">
      <Filters
        dateRange={dateRange}
        setDateRange={setDateRange}
        selectedEventType={selectedEventType}
        setSelectedEventType={setSelectedEventType}
      />
      <PriceChart
        historicalData={historicalData}
        forecastData={forecastData}
        events={events}
      />
      <EventHighlights events={events} />
      <Metrics metrics={metrics} />
    </div>
  );
};

export default Dashboard;