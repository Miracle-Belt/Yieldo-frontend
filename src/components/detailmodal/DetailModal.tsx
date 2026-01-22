import usdtIcon from "../../assets/images/icons/usdt.png";
import giftIcon from "../../assets/images/icons/gift.png";
import etherIcon from "../../assets/images/icons/ethereum.png";

import Divider from "./Divider";

import "../style.css";

interface props {
  usdt: number;
}

const DetailModal = ({ usdt }: props) => {
  return (
    <div className="w-full absolute z-40 bg-[#000000] top-[195px] left-[0] detailCard">
      <div>
        <span className="title">Base</span>
        <p className="subTitle py-5">
          Vestibulum tempus imperdiet sem ac porttito
        </p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <span
              className="icon rounded-full"
              style={{
                backgroundImage: `url(${usdtIcon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span className="content pl-3">USDT</span>
          </div>
          <span className="value">{usdt}%</span>
        </div>
      </div>
      <Divider />
      <div>
        <span className="title">Boost</span>
        <p className="subTitle py-5">
          Vestibulum tempus imperdiet sem ac porttito
        </p>
        {[...Array(3)].map((_, idx) => {
          return (
            <div key={idx} className="flex justify-between py-1">
              <div className="flex items-center">
                <span
                  className="icon rounded-full"
                  style={{
                    backgroundImage: `url(${giftIcon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <span className="content pl-3">Lorem ipsum</span>
              </div>
              <span className="value">{usdt}%</span>
            </div>
          );
        })}
      </div>
      <Divider />
      <div>
        <span className="title">Incentives</span>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span
              className="icon rounded-full"
              style={{
                backgroundImage: `url(${etherIcon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div>
              <span className="content pl-3">Lorem ipsum</span>
            </div>
          </div>
          <div>
            <span className="subTitle py-5">est.</span>
            <span className="value">{usdt}%</span>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <span className="title">Net Arp</span>
        <div>
          <span className="subTitle py-5">est.</span>
          <span className="value">{usdt}%</span>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
