import React from 'react';

const StatusDot = ({ status = 'offline', size = '12px' }) => {
  const getColor = () => {
    if (status === 'online') return 'bg-[#00FF4D]';   // Bright green
    return 'bg-gray-300';                             // Light gray
  };

  return (
    <span
      className={`absolute bottom-0 right-0 ${getColor()} border-2 border-white rounded-full`}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default StatusDot;
