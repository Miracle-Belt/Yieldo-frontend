import DashboardHeader from "./header";
import KPICards from "./kpicards";
import Chart from "./chart/Chart";
import VaultsTable from "./vaultsTable";

const Dashboard = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      <div className="w-full flex justify-center flex-wrap px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="w-full max-w-[1400px] mt-8">
          <DashboardHeader />
          <KPICards />
          <Chart />
          <VaultsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
