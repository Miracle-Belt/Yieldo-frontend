import save from "../../assets/images/icons/save.png"
import ethereum from "../../assets/images/icons/ethereum.png"
import arrow from "../../assets/images/icons/arrow-right.png"
import arrow_right from "../../assets/images/icons/arrow.png"

const Curate = () => {
    return (
        <div className="relative text-center isolate bg-black w-full py-20 px-6 flex flex-col items-center gap-16">
            <div className="max-w-[880px] flex flex-col items-center gap-6">
                <div className="text-sm uppercase tracking-widest opacity-60">LOREM IPSUM</div>
                <div className="text-3xl md:text-5xl font-bold uppercase">TOP AI-CURATED YIELD OPPORTUNITIES</div>
                <div className="text-lg md:text-[22px] opacity-80 max-w-[668px]">
                    Preview the top-performing strategies curated by our AI engine. Update in real time
                </div>
            </div>

            <div className="w-full max-w-7xl overflow-x-auto">
                <div className="min-w-[800px]">
                    <div className="flex border-b border-white/10 pb-4 mb-4 text-left px-4">
                        <div className="flex-1 text-xl md:text-[22px] opacity-60">Strategy</div>
                        <div className="w-32 text-xl md:text-[22px] opacity-60">APY</div>
                        <div className="w-40 text-xl md:text-[22px] opacity-60">Risk Score</div>
                        <div className="w-40 text-xl md:text-[22px] opacity-60 text-right">Chain</div>
                        <div className="w-16"></div>
                    </div>

                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className="flex items-center py-6 px-4 border-b border-white/5 hover:bg-white/5 transition-colors text-left group">
                            <div className="flex-1 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <img src={save} className="w-5 h-5" alt="save" />
                                </div>
                                <div>
                                    <div className="text-xs text-[#F2DE45] uppercase mb-1">Automated hedging</div>
                                    <div className="text-xl font-medium">Strategy Name</div>
                                    <div className="flex items-center gap-2 text-sm opacity-60 mt-1">
                                        <img src={ethereum} className="w-4 h-4" alt="eth" />
                                        <span>Ethereum</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-32">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#F24548] text-lg">12.5%</span>
                                    <img src={arrow} className="w-4 h-4" alt="arrow" />
                                    <span className="text-[#45F265] text-lg font-bold">34%</span>
                                </div>
                            </div>

                            <div className="w-40">
                                <span className={`px-3 py-1 rounded-[4px] text-sm border ${
                                    index === 0 ? "text-[#F24548] border-[#F24548]/30 bg-[#F24548]/10" :
                                    index === 1 ? "text-[#F2DE45] border-[#F2DE45]/30 bg-[#F2DE45]/10" :
                                    "text-[#45F265] border-[#45F265]/30 bg-[#45F265]/10"
                                }`}>
                                    {index === 0 ? "Low" : index === 1 ? "Medium" : "High"}
                                </span>
                            </div>

                            <div className="w-40 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <img src={ethereum} className="w-5 h-5" alt="eth" />
                                    <span className="text-lg">Ethereum</span>
                                </div>
                            </div>

                            <div className="w-16 flex justify-end">
                                <img src={arrow_right} className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" alt="arrow-right" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mt-8">
                <button
                    className="h-[43px] rounded-[4px] px-8 py-2 hover:bg-[#3bb0d9] transition-all myBtn flex items-center justify-center cursor-pointer bg-black text-black font-semibold"
                >
                    Earn as a KOL
                </button>
                <button className="h-[43px] px-8 py-2 rounded border border-[rgba(69,199,242,0.2)] text-sm font-medium text-white cursor-pointer bg-black hover:border-[rgba(69,199,242,0.4)] transition-all">
                    For Vaults
                </button>
            </div>
        </div>
    )
    
    
    

}
export default Curate;