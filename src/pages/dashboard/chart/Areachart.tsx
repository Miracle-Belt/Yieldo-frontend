import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string; // Or 'date', 'time', etc. - your X-axis label
  value: number; // Or 'sales', 'temperature', etc. - your Y-axis value
}

interface AreaChartProps {
  data: DataPoint[];
  xAxisKey?: string; // Allow customization of the x-axis data key
  yAxisKey?: string; // Allow customization of the y-axis data key
  areaColor?: string; // Allow customization of the area fill color
  strokeColor?: string; // Allow customization of the area stroke color
}

const AreaChartComponent: React.FC<AreaChartProps> = ({
  data,
  xAxisKey = "name",
  yAxisKey = "value",
  areaColor = "blue",
  strokeColor = "blue",
}) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const chartContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        setContainerWidth(chartContainerRef.current.offsetWidth);
      }
    };

    handleResize(); // Initial width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={chartContainerRef} className="w-full h-64">
      {/* Container for responsiveness */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey={yAxisKey}
            stroke={strokeColor}
            fill={areaColor}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;
