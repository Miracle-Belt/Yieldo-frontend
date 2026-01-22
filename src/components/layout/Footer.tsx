import logo from "../../assets/images/header-logo.png";
import prime_twitter from "../../assets/images/icons/prime_twitter.png";
import ix_youtube from "../../assets/images/icons/ix_youtube.png";
import telegram from "../../assets/images/icons/meteor-icons_telegram.png";
import medium_line from "../../assets/images/icons/mingcute_medium-line.png";

const Footer = () => {
  return (
    <div
      className="relative py-15 px-65 rounded-lg overflow-hidden flex justify-center items-center gradient w-[1920px] h-[379px] bg-black"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="z-10 w-full gap-[40px] grid grid-cols-1">
        <div className="flex flex-row gap-[40px]">
            <div className="w-[1154px] h-[139px] gap-[24px] grid grid-cols-1">
                <div>
                    <img src={logo} />
                </div>
                <div style={{color:"white"}} className="h-[22px]">
                    Earn points for bringing AUM or distributing yield strategies
                </div>
            </div>
            <div className="w-[206px] grid justify-items-end">
                <a className="content-center">Home</a>
                <a className="content-center">Lorem</a>
                <a className="content-center">Lorem</a>
            </div>
        </div>
        <div className="flex flex-row h-[80px] justify-between py-[20px]">
            <div className="content-center">© 2025 YIELDO - All right reserved</div>
            <div className="flex flex-row w-[184px] h-[40px]">
                <div className="flex flex-row gap-2">
                    <img src={prime_twitter}/>
                    <img src={telegram}/>
                    <img src={ix_youtube}/>
                    <img src={medium_line}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
