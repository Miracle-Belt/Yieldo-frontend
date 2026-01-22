import React from "react";
import MyChart from "./MyChart.tsx";

const App: React.FC = () => {
  const chartData = [
    { date: "01.11.2025", value: 200000 },
    { date: "02.11.2025", value: 800000 },
    { date: "03.11.2025", value: 1000000 },
    { date: "04.11.2025", value: 900000 },
    { date: "05.11.2025", value: 600000 },
    { date: "06.11.2025", value: 500000 },
    { date: "07.11.2025", value: 700000 },
    { date: "08.11.2025", value: 900000 },
    { date: "09.11.2025", value: 800000 },
    { date: "10.11.2025", value: 300000 },
    { date: "11.11.2025", value: 500000 },
    { date: "12.11.2025", value: 600000 },
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md">
      <MyChart
        data={chartData}
        highlightDate="04.11.2025"
        highlightValue={1008345}
      />
    </div>
  );
};

export default App;
