import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Filters = ({ dateRange, setDateRange, selectedEventType, setSelectedEventType }) => {
  return (
    <div className="filters">
      <DatePicker
        selected={dateRange.start}
        onChange={(date) => setDateRange({ ...dateRange, start: date })}
      />
      <DatePicker
        selected={dateRange.end}
        onChange={(date) => setDateRange({ ...dateRange, end: date })}
      />
      <select
        value={selectedEventType}
        onChange={(e) => setSelectedEventType(e.target.value)}
      >
        <option value="all">All Events</option>
        <option value="geopolitical">Geopolitical</option>
        <option value="economic">Economic</option>
      </select>
    </div>
  );
};

export default Filters; // Ensure default export