import React from "react";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload; // Access the data point

    return (
      <div className="bg-gray-800 text-white p-2 rounded-md shadow-md">
        <p className="label">{`${dataPoint.date}`}</p>
        <p className="intro">${dataPoint.value.toLocaleString()}</p>
        <p className="desc">
          <span className="text-green-500">↑</span>
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
