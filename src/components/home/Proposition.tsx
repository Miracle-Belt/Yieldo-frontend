import laptop1 from  "../../assets/images/home/laptop1.png" 
import laptop2 from "../../assets/images/home/laptop2.png"
import laptop3 from "../../assets/images/home/laptop3.png"
import Tick from "../../assets/images/icons/tick-square.png" 

const Proposition = () => {
    return (
        <div className="relative w-[1920px] h-[1585px] gap-[80px] bg-black top-[100px] grid grid-cols-1 justify-items-center">
             <div className="w-[668px] h-[167px] gap-[16px] justify-items-center text-center grid grid-cols-1 ">
                <div className="w-[63px] h-[25px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] gap-[12px]">
                    <div className="w-[39px] h-[17px] text-[14px] text-center">Lorem</div>
                </div>
                <div className="w-[456px] h-[58px] text-[48px]">
                   VALUE PROPOSITION
                </div>
                <div className="w-[668px] h-[52px] text-[22px]">Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc sapien diam, euismod et pretium ir.</div>
            </div>
            <div className="w-[1400px] h-[1138px] gap-[24px]">
                <div className="w-[1400px] h-[358px] gap-[32px] p-[32px] flex">
                    <div className="w-[502px] h-[294px] gap-[28px] grid grid cols-1">
                        <div className="w-[502px] h-[99px] gap-[12px]">
                            <div className="w-[149px] h-[19px] text-[16px]">For KOLs & Creators</div>
                            <div className="w-[502px] h-[68px] text-[28px]">
                            Earn recurring revenue while your audience gets top yield
                        </div>
                        </div>
                        <div className="w-[502px] h-[96px] gap-[12px]">
                            <div className="w-[502px] h-[24px] gap-[8px] flex">
                                <img src={Tick} />
                                <div className="w-[183px] h-[19px] text-[16px]">Share curated vault picks</div>
                            </div>
                            <div className="w-[502px] h-[24px] gap-[8px] flex">
                                <img src={Tick} />
                                <div className="w-[183px] h-[19px] text-[16px]">Track your stats</div>
                            </div>
                            <div className="w-[502px] h-[24px] gap-[8px] flex">
                                <img src={Tick} />
                                <div className="w-[183px] h-[19px] text-[16px]">Earn from AUM-tim</div>
                            </div>
                        </div>
                         <div className="items-center gap-[8px] justify-center w-[130px] h-[43px]">
                            <button
                                className="size-sm h-[35px] rounded-[4px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn flex items-center justify-center
                                cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 
                                hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]"
                                >
                                <span className="text-black text-[16px] font-medium">{"Earn as a KOL"}</span>
                            </button>
                         </div>
                    </div>
                    <div>
                        <img src={laptop1} />
                    </div>
                </div>
                <div className="flex">
                    
                <div className="w-[688px] h-[756px] gap-[32px] p-[32px] grid grid-cols-1">
                        <img src = {laptop2}></img>
                    <div className="w-[502px] h-[260px] gap-[28px] grid grid-cols-1">
                        <div className="w-[502px] h-[65px] gap-[12px] grid grid-cols-1">
                            <div className="w-[127px] h-[19px] text-[16px]">Vaults & Curators</div>
                            <div className="w-[502px] h-[34px] text-[28px]">Get AUM at transparent cost</div>
                        </div>
                        <div className="w-[502px] h-[96px] gap-[12px] grid-cols-1">
                            <div className="w-[502px] h-[24px] gap-[8px] flex">
                                <img src={Tick} />
                                <div className="w-[183px] h-[19px] text-[16px]">Share curated vault picks</div>
                            </div>
                            <div className="w-[502px] h-[24px] gap-[8px] flex">
                                <img src={Tick} />
                                <div className="w-[183px] h-[19px] text-[16px]">Track your stats</div>
                            </div>
                            <div className="w-[502px] h-[24px] gap-[8px] flex">
                                <img src={Tick} />
                                <div className="w-[183px] h-[19px] text-[16px]">Earn from AUM-tim</div>
                            </div>
                        </div>
                        <div className="items-center gap-[8px] justify-center w-[173px] h-[43px]">
                            <button
                                className="size-sm h-[35px] rounded-[4px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn flex items-center justify-center
                                cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 
                                hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]"
                                >
                                <span className="text-black text-[16px] font-medium">{"Partner with Yieldo"}</span>
                            </button>
                         </div>
                        
                        
                    </div>
                </div>

                 <div className="w-[688px] h-[756px] gap-[32px] p-[32px] grid grid-cols-1">
                    <div className="w-[502px] h-[330px] gap-[28px] grid grid-cols-1">
                        <div className="w-[502px] h-[99px] gap-[12px] grid grid-cols-1">
                            <div className="w-[279px] h-[19px] text-[16px]">For Wallets, Portfolio Apps & Website</div>
                            <div className="w-[502px] h-[68px] text-[28px]">Embed curated yield strategies directly into your UI</div>
                        </div>
                        <div className="w-[502px] h-[132px] gap-[12px] grid grid-cols-1">
                            <div className="w-[502px] h-[24px] gap-[8px] flex">
                                <img src={Tick} />
                                <div className="w-[183px] h-[19px] text-[16px]">AI-curated strategies</div>
                            </div>
                            <div className="w-[502px] h-[24px] gap-[8px] flex">
                                <img src={Tick} />
                                <div className="w-[183px] h-[19px] text-[16px]">Risk scoring </div>
                            </div>
                            <div className="w-[502px] h-[24px] gap-[8px] flex">
                                <img src={Tick} />
                                <div className="w-[183px] h-[19px] text-[16px]">Multi-chain routing</div>
                            </div>
                            <div className="w-[502px] h-[24px] gap-[8px] flex">
                                <img src={Tick} />
                                <div className="w-[211px] h-[19px] text-[16px]">Unlock a new revenue stream</div>
                            </div>
                            
                        </div>
                        <div className="items-center gap-[8px] justify-center w-[151px] h-[43px] grid grid-cols-1">
                            <button
                                className="size-sm h-[35px] rounded-[4px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn flex items-center justify-center
                                cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 
                                hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]"
                                >
                                <span className="text-black text-[16px] font-medium">{"Integrate Yieldo"}</span>
                            </button>
                         </div>
                        <div>
                            <img src = {laptop3} />
                        </div>
                </div>

                    </div>
                </div>
               

            </div>
        </div>
    )
}
export default Proposition