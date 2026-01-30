import logo from "../../assets/images/header-logo.png";
import prime_twitter from "../../assets/images/icons/prime_twitter.png";
import ix_youtube from "../../assets/images/icons/ix_youtube.png";
import telegram from "../../assets/images/icons/meteor-icons_telegram.png";
import medium_line from "../../assets/images/icons/mingcute_medium-line.png";

const Footer = () => {
  return (
    <footer
      className="relative py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 flex justify-center items-center bg-black w-full"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="z-10 w-full max-w-[1400px] flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-6 max-w-xl">
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <p className="text-white text-base md:text-lg">
              Earn points for bringing AUM or distributing yield strategies
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-white">
            <a href="/" className="hover:text-[#45c7f2] transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-[#45c7f2] transition-colors">
              Lorem
            </a>
            <a href="#" className="hover:text-[#45c7f2] transition-colors">
              Lorem
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-[#FFFFFF26]">
          <div className="text-gray-400 text-sm md:text-base">
            © 2025 YIELDO - All right reserved
          </div>
          <div className="flex items-center gap-6">
            <a href="#">
              <img
                src={prime_twitter}
                alt="Twitter"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="#">
              <img
                src={telegram}
                alt="Telegram"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="#">
              <img
                src={ix_youtube}
                alt="Youtube"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="#">
              <img
                src={medium_line}
                alt="Medium"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
