import laptop1 from  "../../assets/images/home/laptop1.png" 
import laptop2 from "../../assets/images/home/laptop2.png"
import laptop3 from "../../assets/images/home/laptop3.png"
import Tick from "../../assets/images/icons/tick-square.png" 

const Proposition = () => {
    return (
        <div className="relative w-full py-20 bg-black flex flex-col items-center gap-16 px-6">
             <div className="max-w-3xl flex flex-col items-center gap-4 text-center">
                <div className="text-sm uppercase tracking-widest opacity-60">LOREM IPSUM</div>
                <div className="text-3xl md:text-5xl font-bold uppercase">VALUE PROPOSITION</div>
                <div className="text-lg md:text-[22px] opacity-80 mt-4">Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc sapien diam, euismod et pretium ir.</div>
            </div>

            <div className="w-full max-w-7xl flex flex-col gap-12">
                {/* First Card - Full Width or Alternating */}
                <div className="w-full bg-white/5 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 border border-white/10">
                    <div className="flex-1 flex flex-col gap-8 text-left">
                        <div className="flex flex-col gap-4">
                            <div className="text-sm text-[#45c7f2] uppercase font-bold">For KOLs & Creators</div>
                            <div className="text-2xl md:text-[28px] font-bold leading-tight">
                                Earn recurring revenue while your audience gets top yield
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[
                                "Share curated vault picks",
                                "Track your stats",
                                "Earn from AUM-tim"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <img src={Tick} alt="tick" className="w-5 h-5" />
                                    <div className="text-lg opacity-80">{text}</div>
                                </div>
                            ))}
                        </div>
                        <button className="w-fit h-[43px] rounded-[4px] px-8 py-2 hover:bg-[#3bb0d9] transition-all myBtn flex items-center justify-center cursor-pointer bg-black text-black font-semibold">
                            Earn as a KOL
                        </button>
                    </div>
                    <div className="flex-1">
                        <img src={laptop1} alt="laptop1" className="w-full h-auto" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Second Card */}
                    <div className="bg-white/5 rounded-2xl p-8 flex flex-col gap-8 border border-white/10">
                        <div className="flex-1">
                            <img src={laptop2} alt="laptop2" className="w-full h-auto mb-8" />
                            <div className="flex flex-col gap-4">
                                <div className="text-sm text-[#4fe3c1] uppercase font-bold">Vaults & Curators</div>
                                <div className="text-2xl font-bold">Get AUM at transparent cost</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[
                                "Share curated vault picks",
                                "Track your stats",
                                "Earn from AUM-tim"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <img src={Tick} alt="tick" className="w-5 h-5" />
                                    <div className="text-lg opacity-80">{text}</div>
                                </div>
                            ))}
                        </div>
                        <button className="w-fit h-[43px] rounded-[4px] px-8 py-2 hover:bg-[#3bb0d9] transition-all myBtn flex items-center justify-center cursor-pointer bg-black text-black font-semibold">
                            Partner with Yieldo
                        </button>
                    </div>

                    {/* Third Card */}
                    <div className="bg-white/5 rounded-2xl p-8 flex flex-col gap-8 border border-white/10">
                        <div className="flex-1">
                            <div className="flex flex-col gap-4 mb-8">
                                <div className="text-sm text-[#4596f2] uppercase font-bold">For Wallets, Portfolio Apps & Website</div>
                                <div className="text-2xl font-bold">Embed curated yield strategies directly into your UI</div>
                            </div>
                            <div className="flex flex-col gap-4 mb-8">
                                {[
                                    "AI-curated strategies",
                                    "Risk scoring",
                                    "Multi-chain routing",
                                    "Unlock a new revenue stream"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <img src={Tick} alt="tick" className="w-5 h-5" />
                                        <div className="text-lg opacity-80">{text}</div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-fit h-[43px] rounded-[4px] px-8 py-2 hover:bg-[#3bb0d9] transition-all myBtn flex items-center justify-center cursor-pointer bg-black text-black font-semibold">
                                Integrate Yieldo
                            </button>
                        </div>
                        <div className="mt-auto">
                            <img src={laptop3} alt="laptop3" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Proposition