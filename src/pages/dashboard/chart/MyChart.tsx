import React, { useState, useRef } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

interface ChartDataPoint {
  date: string;
  value: number;
}

interface ChartProps {
  data: ChartDataPoint[];
  highlightDate?: string;
  highlightValue?: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  mousePosition?: { x: number; y: number } | null;
  data?: ChartDataPoint[];
}

const yAxisFormatter = (value: number) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(0)}m`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}k`;
  }
  return value.toString();
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  mousePosition,
  data,
}) => {
  if (active && payload && payload.length && mousePosition && data) {
    let closestDataPoint: ChartDataPoint | undefined;
    let minDistance = Infinity;

    data.forEach((dataPoint) => {
      const distance = Math.abs(
        new Date(dataPoint.date).getTime() - mousePosition.x,
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestDataPoint = dataPoint;
      }
    });

    if (!closestDataPoint) {
      return null;
    }

    const modifiedPayload = payload.map((item) => {
      if (closestDataPoint) {
        return {
          ...item,
          value: closestDataPoint.value,
          payload: {
            ...item.payload,
            value: closestDataPoint.value,
            date: closestDataPoint.date,
          },
        };
      } else {
        return item;
      }
    });

    const dataPoint = modifiedPayload[0].payload;

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

const MyChart: React.FC<ChartProps> = ({
  data,
  highlightDate,
  highlightValue,
}) => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!chartRef.current) return;

    const chartArea = chartRef.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - chartArea.left,
      y: event.clientY - chartArea.top,
    });
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <div
        style={{ width: "100%", height: "100%" }}
        onMouseMove={handleMouseMove}
        ref={chartRef}
      >
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
          <XAxis dataKey="date" stroke="#CBD5E0" tickLine={false} />
          <YAxis
            stroke="#CBD5E0"
            tickFormatter={yAxisFormatter}
            tickLine={false}
          />
          <Tooltip
            content={
              <CustomTooltip mousePosition={mousePosition} data={data} />
            }
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#2DD4BF"
            fill="#2DD4BF"
            fillOpacity={0.3}
            activeDot={{ r: 5 }}
          />
          {highlightDate && highlightValue && (
            <ReferenceLine
              x={highlightDate}
              stroke="white"
              strokeWidth={1}
              label={{
                position: "top",
                value: `${highlightDate} 12:32\n$${highlightValue.toLocaleString()} ↑`,
                fill: "white",
                fontSize: 12,
                offset: 10,
                className: "bg-gray-800 text-white p-2 rounded-md shadow-md",
              }}
            />
          )}
        </AreaChart>
      </div>
    </ResponsiveContainer>
  );
};

export default MyChart;
