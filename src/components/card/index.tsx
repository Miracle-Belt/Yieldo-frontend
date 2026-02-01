import { useState } from "react";

import DetailModal from "../detailmodal/DetailModal";
import ethereumIcon from "../../assets/images/icons/ethereum.png";
import usdtIcon from "../../assets/images/icons/usdt.png";
import giftIcon from "../../assets/images/icons/gift.png";
import DepositModal from "../modal/DepositModal";
import "../style.css";

interface props {
  index: number;
}

const Card = ({ index }: props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setOpenModals] = useState(false);

  const openModal = () => {
    setOpenModals(true);
  };

  const closeModal = () => {
    setOpenModals(false);
  };

  return (
    <div
      key={index}
      className="bg-[#080808] relative rounded-lg p-6 flex flex-col gap-4 border-gray-800 hover:border-gray-700 transition-colors"
    >
      {/* Card Header */}
      <div className="flex justify-between items-center h-[27px]">
        <span className="text-[#f2de45] font-medium text-[16px]">Lending</span>
        <div className="bg-[#45F2651A] px-[8px] py-[4px]">
          <span className="text-green-500 font-medium text-[16px]">
            Risk Score 89
          </span>
        </div>
      </div>

      {/* Ethereum */}
      <div className="flex items-center gap-3">
        <div
          className="w-[19px] h-[19px] rounded-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${ethereumIcon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <span className="myGrey text-[16px]">Ethereum</span>
      </div>

      {/* USDT */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${usdtIcon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <span className="text-white text-[32px] font-medium leading-[100%]">
          USDT
        </span>
      </div>

      {/* Time Periods and Percentages */}
      <div className="flex items-center gap-4 text-[16px]">
        <div className="flex items-center gap-1">
          <span
            className="w-[19px] h-[19px] cursor-pointer"
            style={{
              backgroundImage: `url(${giftIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></span>
          <span className="myGrey ml-[5px]">7d</span>
        </div>
        <span className="text-red-500 font-medium">12.5%</span>
        <span className="myGrey">30d</span>
        <span className="text-[#45F265] font-medium">34%</span>
      </div>
      {isHovered && <DetailModal usdt={34} />}
      {/* Description Text */}
      <p className="text-[#FFFFFF99] text-[16px] font-normal">
        Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo
        orci, suscipit non.
      </p>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-auto pt-2">
        <span className="text-[#FFFFFF] font-semibold text-[32px]">
          <span className="text-[#FFFFFF4D] text-[24px]">$</span>60m
        </span>
        <button
          onClick={() => openModal()}
          className="size-sm h-[35px] rounded-[4px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn flex items-center justify-center
                      cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 
                      hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]"
        >
          Deposit
        </button>
      </div>

      <DepositModal
        isOpen={modalOpen}
        onClose={closeModal}
        children={undefined}
      />
    </div>
  );
};

export default Card;
