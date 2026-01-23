import Button from "../Button";
import logo from "../../assets/images/header-logo.png";
import ConnectWallet from "../ConnectWallet";

const Header = () => {
  return (
      <div className="w-full flex justify-center flex-wrap">
          <div className="w-full max-w-[1400px]">
              <nav className="w-full h-20 pt-8 pb-4 flex justify-between items-center bg-black">
              <div className="flex items-center">
                <img alt="" src={logo} className="w-full w-[116px] h-[40px]" />
              </div>
              <div className="flex items-center gap-8">
                <a
                  href="/dashboard"
                  className="text-base font-normal text-white no-underline transition-colors duration-200 hover:text-[#4596f2]">
                  Dashboard
                </a>
                <a
                  href="/configurator"
                  className="text-base font-bold text-[#4596f2cc] no-underline [text-shadow:0_0_8px_rgba(69,150,242,0.6),0_0_16px_rgba(69,150,242,0.4)]"
                >
                  Landing page editor
                </a>
              </div>
                <div className="flex items-center gap-[18px]">
                  <Button content={"Earn as a KOL"} />
                  <button className="px-5 py-2.5 rounded border border-[rgba(69,199,242,0.2)] text-sm font-medium text-white cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]">
                    For Vaults
                  </button>
                  <ConnectWallet/>
                </div>
            </nav>
          </div>
      </div>
  );
}

export default Header;
