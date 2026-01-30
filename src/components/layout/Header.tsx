import Button from "../Button";
import logo from "../../assets/images/header-logo.png";
import ConnectWallet from "../ConnectWallet";

const Header = () => {
  return (
    <header className="w-full flex justify-center px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-[1400px]">
        <nav className="w-full py-4 md:py-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-black">
          <div className="flex items-center">
            <img
              alt="Logo"
              src={logo}
              className="w-[100px] md:w-[116px] h-auto"
            />
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <a
              href="/dashboard"
              className="text-sm md:text-base font-normal text-white no-underline transition-colors duration-200 hover:text-[#4596f2]"
            >
              Dashboard
            </a>
            <a
              href="/landing"
              className="text-sm md:text-base text-white no-underline [text-shadow:0_0_8px_rgba(69,150,242,0.6),0_0_16px_rgba(69,150,242,0.4)]"
            >
              Landing page editor
            </a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-[18px]">
            <div className="hidden sm:block">
              <Button content={"Earn as a KOL"} />
            </div>
            <button className="px-3 py-1.5 md:px-5 md:py-2.5 rounded border border-[rgba(69,199,242,0.2)] text-xs md:text-sm font-medium text-white cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]">
              For Vaults
            </button>
            <ConnectWallet />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
