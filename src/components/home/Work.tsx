import Select from "../../assets/images/home/select.png"
import Share from "../../assets/images/home/share.png"
import Earn from "../../assets/images/home/earn.png"
const Work = () => {
        return (
            <div className="relative w-full py-24 bg-black flex flex-col items-center gap-16 px-6">
                <div className="max-w-3xl flex flex-col items-center gap-4 text-center">
                    <div className="text-sm uppercase tracking-widest opacity-60">LOREM IPSUM</div>
                    <div className="text-3xl md:text-5xl font-bold uppercase">HOW IT WORKS</div>
                    <div className="text-lg md:text-[22px] opacity-80 max-w-2xl">
                        Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc sapien diam, euismod et pretium ir.
                    </div>
                </div>
                <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
                    <img src={Select} alt="Select" className="w-full max-w-[300px] h-auto" />
                    <img src={Share} alt="Share" className="w-full max-w-[300px] h-auto" />
                    <img src={Earn} alt="Earn" className="w-full max-w-[300px] h-auto" />
                </div>
            </div>
        )
}
export default Work;