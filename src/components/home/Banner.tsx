import Button from "../Button";
import videoSrc from "../../assets/images/home/bg-video.mp4";
const Banner = () => {
  return (
    <div className="relative isolate px-6 lg:px-8 w-full min-h-[800px] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-[1000px] text-center mt-20 flex flex-col gap-6">
        <div className="text-4xl md:text-5xl lg:text-[64px] leading-tight uppercase">
          THE INTELLIGENT DISTRIBUTION LAYER FOR ON-CHAIN YIELD
        </div>
        <div className="text-lg md:text-xl lg:text-[22px] opacity-80">
          Earn recurring revenue while your audience gets top yield
        </div>
      </div>
      <div className="relative z-10 max-w-[634px] text-center flex flex-col gap-6 mt-20 md:mt-40">
        <div className="text-sm md:text-base lg:text-[18px] opacity-70">
          Fusce volutpat lectus et nisl consectetur finibus. In vitae
          scelerisque augue, in varius eros. Nunc sapien diam, euismod et
          pretium id, volutpat et tortor. In vulputate lorem quis dui
          vestibulum, vitae imperdiet diam bibendum.
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
          <Button content={"Earn as a KOL"} />
          <button className="px-5 py-2.5 rounded border border-[rgba(69,199,242,0.2)] text-sm font-medium text-white cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]">
            For Vaults
          </button>
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="underline opacity-60 hover:opacity-100 transition-opacity text-[#45E3C1]"
          >
            Integrate
          </a>
        </div>
      </div>
      <video
        src={videoSrc}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
    </div>
  );
};
export default Banner;
