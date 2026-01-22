import save from "../../assets/images/icons/save.png"
import ethereum from "../../assets/images/icons/ethereum.png"
import arrow from "../../assets/images/icons/arrow-right.png"
import arrow_right from "../../assets/images/icons/arrow.png"

const Curate = () => {
    return (
            <div className="relative text-center isolate bg-black absolute w-[1920px] h-[990px] gap-[80px] top-[100px] grid grid-cols-1 justify-items-center">
                <div className="w-[880px]h-[167px] content-center gap-[80px] ">
                    <div className="gap-[10px]">Lorem</div>
                    <div className="text-[48px]">TOP AI-CURATED YIELD OPPORTUNITIES </div>
                    <div className="text-[22px] justify-items-center"><div className="w-[668px] h-[52px]">Preview the top-performing strategies curated by our AI engine. 
                        Update in real time</div>
                    </div>
                </div>
                <div className="w-[1400px] h-[420px] gap-[18px]">
                    <div className=" flex">
                        <div className="w-[350px] h-[42px] pl-[12px] pr-[12px] pt-[8px] pb-[8px]">
                            <div className="w-[326px] h-[26px] pl-[40px] gap-[8px]">
                            <div className="w-[85px] h-[26px] text-[22px]">Strategy</div>
                            </div>
                        </div>
                        <div  className=" gap-[18px]">
                            <div className="w-[322px] h-[42px] pl-[12px] pr-[12px] pt-[8px] pb-[8px]">
                                <div className="w-[326px] h-[26px] gap-[8px]">
                                <div className="w-[42px] h-[26px] text-[22px]">APY</div>
                            </div>
                            </div>  
                        </div>
                        <div  className="">
                            <div className="w-[322px] h-[42px] pl-[12px] pr-[12px] pt-[8px] pb-[8px]">
                                <div className="w-[326px] h-[26px]  gap-[8px]">
                                <div className=" text-[22px] w-[106px] h-[26px]">Risk Score</div>
                            </div>
                            </div> 
                        </div>
                        <div  className="">
                            <div className="w-[322px] h-[42px] pl-[12px] pr-[12px] pt-[8px] pb-[8px]">
                                <div className="w-[326px] h-[26px] gap-[8px]">
                                <div className="w-[58px] h-[26px] text-[22px]">Chain</div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="w-[1400px] h-[360px] gap-[12px]">
                        <div className="w-[1400px] h-[112px] pt-[8px] pb-[8px] flex">
                            <div className="w-[350px] h-[96px] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[10px]">
                                <div className="w-[190px] h-[80px] gap-[16px] flex items-center">
                                    <img src={save} className="w-[24px] h-[24px]" />
                                    <div className="w-[150px] h-[80px] gap-[8px]">
                                        <div className="text-[16px] text-[#F2DE45]">Automated hedging</div>
                                        <div className="text-[22px]">Strategy Name</div>
                                        <div className="flex">
                                            <img src={ethereum}/>
                                            <div className="text-[16px]">Ethereurm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[322px] h-[35px] pt-[8px] pr-[12px] pl-[12px] pb-[8px] gap-[10px]">
                                <div className="w-[298px] h-[19px] gap-[8px] flex">
                                    <div className="text-[#F24548] text-[16px] w-[42px] h-[19px]">12.5%</div>
                                        <img src={arrow} className="w-[16px] h-[16px]" />
                                        <div className="text-[#45F265] text-[16px] w-[35px] h-[19px]">34%</div>
                                    </div>
                                </div>
                                <div className="w-[322px] h-[43px] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[10px]">
                                   <div className="w-[46px] h-[27px] pt-[4px] pb-[4px] pr-[8px] pl-[8px]
                                    gap-[4px] text-[#F24548] border-solid border-1 rounded-[4px]"><div>Low</div></div>
                                </div>
                                <div className="w-[322px] h-[35px] pt-[8px] pr-[12px] pl-[12px] pb-[8px] gap-[10px]">
                                    <div className="w-[92px] h-[19px] gap-[4px] flex">
                                        <img src={ethereum} className="w-[19px] h-[19px]"/>
                                        <div>Ethereum</div>
                                    </div>
                                </div>
                                <div className="w-[84px] h-[64px] pt-[8px] pr-[12px] pl-[12px] pb-[8px] gap-[10px]">
                                    <div className="w-[64px]h-[48px]">
                                        <img src = {arrow_right} className="w-[24px] h-[24px]"/>
                                    </div>
                                </div>
                        </div>

                         <div className="w-[1400px] h-[112px] pt-[8px] pb-[8px] flex">
                            <div className="w-[350px] h-[96px] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[10px]">
                                <div className="w-[190px] h-[80px] gap-[16px] flex items-center">
                                    <img src={save} className="w-[24px] h-[24px]" />
                                    <div className="w-[150px] h-[80px] gap-[8px]">
                                        <div className="text-[16px] text-[#F2DE45]">Automated hedging</div>
                                        <div className="text-[22px]">Strategy Name</div>
                                        <div className="flex">
                                            <img src={ethereum}/>
                                            <div className="text-[16px]">Ethereurm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[322px] h-[35px] pt-[8px] pr-[12px] pl-[12px] pb-[8px]">
                                <div className="w-[298px] h-[19px] gap-[8px] flex">
                                    <div className="text-[#F24548] text-[16px] w-[42px] h-[19px]">12.5%</div>
                                        <img src={arrow} className="w-[16px] h-[16px]" />
                                        <div className="text-[#45F265] text-[16px] w-[35px] h-[19px]">34%</div>
                                    </div>
                                </div>
                                <div className="w-[322px] h-[43px] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[10px]">
                                   <div className="w-[74px] h-[27px] pt-[4px] pb-[4px] pr-[8px] pl-[8px] gap-[4px] text-[#F2DE45] border-solid border-1 rounded-[4px]">Medium</div>
                                </div>
                                <div className="w-[322px] h-[35px] pt-[8px] pr-[12px] pl-[12px] pb-[8px] gap-[10px]">
                                    <div className="w-[92px] h-[19px] gap-[4px] flex">
                                        <img src={ethereum} className="w-[19px] h-[19px]"/>
                                        <div>Ethereum</div>
                                    </div>
                                </div>
                                <div className="w-[84px] h-[64px] pt-[8px] pr-[12px] pl-[12px] pb-[8px] gap-[10px]">
                                    <div className="w-[64px]h-[48px]">
                                        <img src = {arrow_right} className="w-[24px] h-[24px]"/>
                                    </div>
                                </div>
                        </div>
                         <div className="w-[1400px] h-[112px] pt-[8px] pb-[8px] flex">
                            <div className="w-[350px] h-[96px] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[10px]">
                                <div className="w-[190px] h-[80px] gap-[16px] flex items-center">
                                    <img src={save} className="w-[24px] h-[24px]" />
                                    <div className="w-[150px] h-[80px] gap-[8px]">
                                        <div className="text-[16px] text-[#F2DE45]">Automated hedging</div>
                                        <div className="text-[22px]">Strategy Name</div>
                                        <div className="flex">
                                            <img src={ethereum}/>
                                            <div className="text-[16px]">Ethereurm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[322px] h-[35px] pt-[8px] pr-[12px] pl-[12px] pb-[8px]">
                                <div className="w-[298px] h-[19px] gap-[8px] flex">
                                    <div className="text-[#F24548] text-[16px] w-[42px] h-[19px]">12.5%</div>
                                        <img src={arrow} className="w-[16px] h-[16px]" />
                                        <div className="text-[#45F265] text-[16px] w-[35px] h-[19px]">34%</div>
                                    </div>
                                </div>
                                <div className="w-[322px] h-[43px] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[10px]">
                                   <div className="w-[54px] h-[27px] pt-[4px] pb-[4px] pr-[8px] pl-[8px] gap-[4px] text-[#45F265] border-solid border-1 rounded-[4px]">Hight</div>
                                </div>
                                <div className="w-[322px] h-[35px] pt-[8px] pr-[12px] pl-[12px] pb-[8px] gap-[10px]">
                                    <div className="w-[92px] h-[19px] gap-[4px] flex">
                                        <img src={ethereum} className="w-[19px] h-[19px]"/>
                                        <div>Ethereum</div>
                                    </div>
                                </div>
                                <div className="w-[84px] h-[64px] pt-[8px] pr-[12px] pl-[12px] pb-[8px] gap-[10px]">
                                    <div className="w-[64px]h-[48px]">
                                        <img src = {arrow_right} className="w-[24px] h-[24px]"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                </div>
            <div className="w-[265px] h-[43px] gap-[24px]">
                <div className="flex items-center gap-[24px] justify-center">
                    <button
                        className="size-sm h-[35px] rounded-[4px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn flex items-center justify-center
                        cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 
                        hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]"
                        >
                        <span className="text-black text-[16px] font-medium">{"Earn as a KOL"}</span>
                    </button>
                <button className="px-5 py-2.5 rounded border border-[rgba(69,199,242,0.2)] text-sm font-medium text-white cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]">
                    For Vaults
                </button>
                </div>
            </div>
                
            </div>
    
    
    
    
        )
}
export default Curate;