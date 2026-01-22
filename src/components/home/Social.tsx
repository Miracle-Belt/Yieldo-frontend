import Video from "../../assets/images/home/video.png"
const Social = () => {
    return (
        <div className=" relative w-[1920px] h-[1085px] gap-[80px] bg-black top-[100px] grid grid-cols-1 justify-items-center">
            <div className="w-[435px] h-[99px] gap-[16px] justify-items-center">
                <div className="w-[63px] h-[25px] pt-[4px] pb-[4px] pr-[12px] pl-[12px]">
                    <div className="w-[39px] h-[17px] text-[14px] text-center">Lorem</div>
                </div>
                <div className="w-[435px] h-[58px] text-[48px] text-center">
                    SOCIAL VALIDATION
                </div>
            </div>
            <div>
                <img src = {Video} />
            </div>
        </div>
    )
}
export default Social;