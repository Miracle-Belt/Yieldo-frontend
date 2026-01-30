import mezzanine from "../../assets/images/home/mezzanine.png";
import coinStats from "../../assets/images/home/coin-stats.png";
import lagoon from "../../assets/images/home/lagoon.png";
import neutral from "../../assets/images/home/neutral.png";
import nightly from "../../assets/images/home/nightly.png";
const Trust = () => {
  return (
    <div className="relative isolate px-6 lg:px-8 bg-black w-full py-20 text-center">
      <div className="text-2xl md:text-[34px] pb-12 uppercase">TRUSTED BY</div>
      <div className="max-w-10xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-10">
          <div className="max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
            {" "}
            <img
              src={mezzanine}
              alt="mezzanine"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
            {" "}
            <img
              src={coinStats}
              alt="coinStats"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
            {" "}
            <img
              src={lagoon}
              alt="lagoon"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
            {" "}
            <img
              src={neutral}
              alt="neutral"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
            {" "}
            <img
              src={nightly}
              alt="nightly"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
