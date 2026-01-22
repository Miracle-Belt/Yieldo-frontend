import Button from "../Button";
const Ready = () => {
    return(
       <div className="relative w-[1920px] h-[560px] gap-[10px] bg-black top-[100px] grid grid-cols-1 justify-items-center">
           <div className="w-[666px] h-[175px] gap-[16px] justify-items-center text-center grid grid-cols-1 ">
                <div className="w-[63px] h-[25px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] gap-[12px] grid grid-cols-1 gap-[10px]">
                    <div className="w-[39px] h-[17px] text-[14px] text-center">Lorem</div>
                </div>
                <div className="w-[666px] h-[134px] text-[48px]">
                 READY TO GROW WITH ON-CHAIN YEILD?

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
    </div>
    )
}
export default Ready;