import Button from "../Button";
const Ready = () => {
  return (
    <div className="relative w-full py-6 bg-black flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-4xl flex flex-col items-center gap-10">
        <div className="text-sm uppercase tracking-widest opacity-60">
          LOREM IPSUM
        </div>
        <div className="text-3xl md:text-5xl lg:text-6xl uppercase leading-tight">
          READY TO GROW WITH ON-CHAIN YIELD?
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
          <Button content={"Earn as a KOL"} />
          <button className="px-8 py-2.5 rounded border border-[rgba(69,199,242,0.2)] text-sm font-medium text-white cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]">
            For Vaults
          </button>
        </div>

        <div className="mt-4">
          <a
            href="#"
            className="underline opacity-60 hover:opacity-100 transition-opacity text-[#4FE3C1]"
          >
            Integrate
          </a>
        </div>
      </div>
    </div>
  );
};
export default Ready;
