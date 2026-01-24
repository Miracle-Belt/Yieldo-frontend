const Bottom = () => {
  return (
    <div
      className="relative py-12 md:py-16 lg:py-20 px-6 rounded-lg overflow-hidden flex justify-center items-center gradient"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Pattern */}
      <div className="z-10 w-full max-w-[1400px]">
        {/* Main Heading */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:h-auto relative">
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl md:text-3xl lg:text-[34px] font-normal max-w-[800px]">
              Maecenas dignissim justo eget nulla rutrum molestie.
            </h2>
            {/* Sub Text */}
            <p className="text-sm md:text-base lg:text-lg text-[#B3B4C1]">
              Maecenas dignissim justo eget nulla rutrum molestie.
            </p>
          </div>
          <div className="flex items-center md:items-end justify-start md:justify-end">
            <button className="h-[35px] w-[100px] rounded-[4px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn ">
              <span className="font-[Aeonik] text-black text-[16px] font-medium">
                Tip
              </span>
            </button>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 border-t-1 border-[#FFFFFF26] pt-3">
          <p className="text-[#B3B4C1] text-sm">Powered by Yieldo</p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
