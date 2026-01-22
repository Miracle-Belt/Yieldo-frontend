import Filter from "../../components/filter";

const Configurator = () => {
  return (
    <div className="bg-black w-full min-h-[1826px]">
      <div className="w-full flex justify-center flex-wrap">
        <div className="w-full max-w-[1400px]">
        </div>
      </div>
      <p>Lorem</p>
      <h1>Choose the vaults you want to promote</h1>
      <span>You can select 1-10 vaults</span>
      <div className="rounded-[4px] border border-[#FFFFFF0D] p-[6px] gap-[12px] bg-[#FFFFFF0D]">
        <button className="size-sm h-[35px] rounded-[4px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn flex items-center justify-center cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]">
          <span className="text-black text-[16px] font-medium">
            {"All strategies"}
          </span>
        </button>
        <button
          className="size-sm h-[35px] rounded-[4px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn flex items-center justify-center
          cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 
          hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]"
          >
          <span className="text-black text-[16px] font-medium">
            {"Recommended"}
          </span>
        </button>
      </div>
      <div className="w-full min-h-[600px] flex justify-center flex-wrap px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="w-full max-w-[1400px] mt-16 md:mt-20">
          <div className="flex flex-col items-center mb-6">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
