import React from 'react';
import { ReferenceLine, Label } from 'recharts';

const EventHighlights = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <ReferenceLine
          key={event.date}
          x={event.date}
          stroke="rgba(255, 0, 0, 0.5)"
          strokeWidth={2}
        >
          <Label value={event.type} position="insideTop" fill="red" />
        </ReferenceLine>
      ))}
    </>
  );
};

export default EventHighlights; // Ensure default export