const Bottom = () => {
  return (
    <div
      className="relative pt-15 pb-15 px-6 rounded-lg overflow-hidden flex justify-center items-center gradient"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Pattern */}
      <div className="z-10 w-[1400px]">
        {/* Main Heading */}
        <div className="flex flex-row justify-between h-[87px] relative">
          <div className="flex flex-col justify-between">
            <h2 className="text-white text-3xl md:text-4xl lg:text-[34px] font-normal">
              Maecenas dignissim justo eget nulla rutrum molestie.
            </h2>
            {/* Sub Text */}
            <div>
              <span className="text-base md:text-lg text-center text-[#B3B4C1]">
                Maecenas dignissim justo eget nulla rutrum molestie.
              </span>
            </div>
          </div>
          <div className="absolute bottom-[0] right-[0]">
            <button className="size-sm h-[35px] w-[100px] rounded-[4px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn ">
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
