import Button from "../Button";
import videoSrc from '../../assets/images/home/bg-video.mp4';
const Banner = () => {
        return(
            <div className="relative isolate px-6 lg:px-8 w-[1920px] h-[750px]">
                <div className = "absolute w-[953px] h-[154px] content-center text-center top-[188px] left-[483.5px] gap-[24px] ">
                <div className = "text-[64px] ">
                   THE INTELLIGENT DISTRIBUTION LAYER FOR ON-CHAIN YIEL
                </div>
                <div className = "text-[22px]">
                    Earn recurring revenue while your audience gets top yield
                </div>
           </div>
           <div className = "absolute w-[634px] h-[188px] content-center text-center top-[672px] left-[643px] gap-[24px]">
             <div className = "text-[18px]">
                Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. 
                Nunc sapien diam, euismod et pretium id, volutpat et tortor. In vulputate lorem quis dui vestibulum, vitae imperdiet diam bibendum.
             </div>
            <div className="flex items-center gap-[24px] justify-center">
                <Button content={"Earn as a KOL"} />
                <button className="px-5 py-2.5 rounded border border-[rgba(69,199,242,0.2)] text-sm font-medium text-white cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]">
                    For Vaults
                </button>
            </div>
            <div className="gap-[35px]">
                <a>Integrate</a>
            </div>
           </div>
           <video
                src={videoSrc}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline
                style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                zIndex: -999,
                opacity: 1
                }}
            />
            </div>
        )
}
export default Banner;