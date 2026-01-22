import mezzanine from "../../assets/images/home/mezzanine.png";
import coinStats from "../../assets/images/home/coin-stats.png"
import lagoon from "../../assets/images/home/lagoon.png"
import neutral from "../../assets/images/home/neutral.png"
import nightly from "../../assets/images/home/nightly.png"
const Trust  = () => {
    return (
     <div className="relative isolate px-6 lg:px-8 bg-black w-[1920px] h-[436px] absolute text-center content-center top-[120px]">
        <div className="text-[34px] pb-8">TRUSTED BY</div>
        <div className="w-[1800px] h-[110px] gap-[32px] ml-[60px] mr-[60px]">
            <div className="flex justify-center content-center gap-[10px]">
                <div className="w-[312px] h-[110px] ml-[32px]"> <img src={mezzanine} /></div>
                <div className="w-[312px] h-[110px]"> <img src={coinStats} /></div>
                <div className="w-[312px] h-[110px]"> <img src={lagoon} /></div>
                <div className="w-[312px] h-[110px]"> <img src={neutral} /></div>
                <div className="w-[312px] h-[110px] mr-[32px]">  <img src={nightly} /></div>
            </div>
        </div>
     </div>
    )
}

export default Trust;