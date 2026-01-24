import Main from "./main";
import Cards from "./cards";
import Bottom from "../../components/landing/Bottom";
import Filter from "../../components/filter";
const Landing = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      <Main />
      <div className="w-full flex justify-center flex-wrap px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="w-full max-w-[1400px] mt-16 md:mt-20">
          <div className="flex flex-col items-center mb-6">
            <Filter />
          </div>
          <Cards />
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Landing;
