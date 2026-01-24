import Button from "../Button";
const Adopter = () => {
    return (
        <div className="relative w-full py-24 bg-black flex flex-col items-center justify-center text-center px-6">
           <div className="max-w-4xl flex flex-col items-center gap-8">
                <div className="text-sm uppercase tracking-widest opacity-60">LOREM IPSUM</div>
                <div className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                    EARN POINTS AS AN EARLY ADOPTER
                </div>
                <div className="text-lg md:text-[22px] opacity-80 max-w-2xl">
                    Earn points for bringing AUM or distributing yield strategies.
                </div>
                <div className="mt-4">
                    <Button content={"Join Early Access"} />
                </div>
            </div>
        </div>
    )
}
export default Adopter