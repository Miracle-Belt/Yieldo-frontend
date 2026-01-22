import Button from "../Button";
const Adopter = () => {
    return(
        <div className="relative w-[1920px] h-[560px] gap-[10px] bg-black top-[100px] grid grid-cols-1 justify-items-center">
           <div className="w-[819px] h-[141px] gap-[16px] justify-items-center text-center grid grid-cols-1 ">
                <div className="w-[63px] h-[25px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] gap-[12px] grid grid-cols-1 ">
                    <div className="w-[39px] h-[17px] text-[14px] text-center">Lorem</div>
                </div>
                <div className="w-[819px] h-[58px] text-[48px]">
                  EARN POINTS AS AN EARLY ADOPTER
                </div>
                <div className="w-[668px] h-[26px] text-[22px]">Earn points for bringing AUM or distributing yield strategies.</div>
                <div className="items-center gap-[8px] justify-center w-[161px] h-[43px]">
                            <Button content={"Join Early Access"} />
                </div>
            </div>
    </div>
    )
}
export default Adopter