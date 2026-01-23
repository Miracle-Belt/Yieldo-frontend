import React from "react";
import { useState } from "react";
import ethereumIcon from "../../assets/images/icons/ethereum.png";

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DepositModal = ({ isOpen, onClose, children }: DepositModalProps) => {
  const [ethereum, setEthereum] = useState<string>("0");
  const [price, setPrice] = useState<string>("$0");
  const [valid, setValid] = useState<string>("Enter a valid amount");

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const inputChange = (value: string) => {
    setEthereum(value);
    const num = (Number(value) * 1037).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    setPrice(num);
    if (value == "" || value == "0") setValid("Enter a valid amount");
    else setValid("Insufficient token balance");
  };

  const sendETH = () => {};

  return (
    <div
      className="w-full fixed inset-0 z-50 flex items-center justify-center bg-opacity-90 backdrop-blur-xs"
      onClick={handleBackdropClick}
    >
      <div className="modal xl:w-[500px] lg:w-[150px] md:w-[200px] sm:w-[150px] relative ">
        <p className="font-medium text-[20px] pb-[20px] text-blue-300 ">
          {" "}
          DEPOSIT{" "}
        </p>
        <div className="flex justify-between gap-2 w-full mb-[20px]">
          <input
            type="text"
            value={ethereum}
            onChange={(e) => {
              const onlyNumbers = e.target.value.replace(/\D/g, "");
              inputChange(onlyNumbers);
            }}
            className="text-[25px] px-2 bg-gray-800/50 border border-gray-700 rounded text-white focus:outline-none focus:border-[#45c7f2] max-w-[250px]"
          />
          <button
            className={`flex items-center gap-2 px-2 py-2 rounded transition-all `}
          >
            <div
              className="w-[25px] h-[25px] rounded-full flex items-center justify-center"
              style={{
                backgroundImage: `url(${ethereumIcon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <span className="text-white text-lg">rETH</span>
          </button>
        </div>

        <div className="flex justify-between w-full my-2">
          <div className="text-[15px] px-2 py-2 rounded text-blue-400 focus:outline-none focus:border-[#45c7f2] max-w-[150px]">
            {price}
          </div>
          <button
            className={`flex items-center gap-2 px-2 py-2 rounded transition-all `}
          >
            <div className="w-[25px] h-[25px] rounded-full flex items-center justify-center" />
            <span className="text-blue-400 text-lg">
              0 rETH <span className="text-[12px] text-green-300">MAX</span>
            </span>
          </button>
        </div>

        <button
          onClick={() => sendETH()}
          className="size-sm h-[43px] rounded-[6px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn flex items-center justify-center
                    cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 
                    hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)] w-full"
        >
          <span className="text-black text-[16px] font-medium">{valid}</span>
        </button>
      </div>
      {children}
    </div>
  );
};

export default DepositModal;
