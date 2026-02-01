import React, { useEffect } from "react";
import { useState } from "react";
import ethereumIcon from "../../assets/images/icons/ethereum.png";
// import depositRouter from "../../assets/YieldoDepositRouter.json";
// import { types } from "../../utils/eip712";
// import { ethers } from "ethers";
import { useMetaMask } from "../../hooks/useMetaMask";
// import { API_BASE_URL } from "../../config/api";

// This would be loaded from deployment file or env
// const DEPLOYMENT = {
//   DepositRouter: "0x59Db00B9A8426888D5bf6aB8EC5375c4fD5B577E".toLowerCase(),
//   MockLagoonVault: "0xeCD63cC2F2195B491CBCd19e294E812E30396CD2".toLowerCase(),
//   MockUSDC: "0xe282b74b79989FB0Ee27A49F7fF1bfA36b257abE".toLowerCase(),
// };
// // KOL address (for demo, using a placeholder - in production this would be from URL params)
// const kolAddress = "0x8171F3FF83443F250008F9e8305191966473D96d".toLowerCase();

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DepositModal = ({ isOpen, onClose, children }: DepositModalProps) => {
  const [amount, setAmount] = useState<string>("0");
  const [eth, setETH] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { account, provider, connectWallet } = useMetaMask();

  useEffect(() => {
    connectWallet();
  }, []);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const inputChange = (value: string) => {
    setAmount(value);
    const num = (Number(value) * 1037).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    setETH(num);
  };

  const deposit = async () => {
    if (!provider || !account || !amount) {
      alert("Please connect wallet and enter amount");
      return;
    }

    // await window.ethereum?.request({
    //   method: "wallet_switchEthereumChain",
    //   params: [{ chainId: "0xaa36a7" }], // Sepolia
    // });

    try {
      setLoading(true);
      // Get signer and contracts
      // const signer = await provider.getSigner();
      // const chainId = (await provider.getNetwork()).chainId;
      // const chainId = "0xaa36a7";
      // const usdc = new ethers.Contract(
      //   DEPLOYMENT.MockUSDC,
      //   mockUSDC.abi,
      //   signer,
      // );
      // const router = new ethers.Contract(
      //   DEPLOYMENT.DepositRouter,
      //   depositRouter.abi,
      //   signer,
      // );
      // const depositAmount = ethers.parseUnits(amount, 6); // USDC has 6 decimals
      // const nonce = Date.now();
      // const deadline = Math.floor(Date.now() / 1000) + 3600; // 1 hour

      // Create intent
      // const intent = {
      //   user: account,
      //   vault: DEPLOYMENT.MockLagoonVault,
      //   asset: DEPLOYMENT.MockUSDC,
      //   amount: depositAmount,
      //   nonce: nonce,
      //   deadline: deadline,
      //   kolAddress: kolAddress,
      // };

      // Sign with EIP-712
      // const domain = {
      //   name: "YieldoDepositRouter",
      //   version: "1",
      //   chainId: chainId,
      //   verifyingContract: DEPLOYMENT.DepositRouter,
      // };
      // const signature = await signer.signTypedData(domain, types, intent);

      // // Approve USDC
      // const approveTx = await usdc.approve(DEPLOYMENT.DepositRouter, depositAmount);
      // await approveTx.wait();

      // const mintTx = await usdc.mint(account, depositAmount);
      // await mintTx.wait();

      // const depositFeeEnable = await router.setFeesEnabled(true);
      // await depositFeeEnable.wait();

      // console.log("depositTx before : ", intent, signature);
      // console.log("approveTx before : ", approveTx);
      // console.log("mintTx before : ", mintTx);

      // Execute deposit
      // const depositTx = await router.verifyAndDeposit(intent, signature);
      // const receipt = await depositTx.wait();

      // // const depositTx = await router.verifyAndDeposit(intent, signature);
      // alert(`Deposit successful! Tx: ${receipt.hash}`);

      setAmount("");
    } catch (error) {
      console.error("Error depositing:", error);
    } finally {
      setLoading(false);
    }
  };

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
            type="number"
            value={amount}
            onChange={(e) => {
              inputChange(e.target.value);
            }}
            className="text-[25px] px-2 bg-gray-800/50 border border-gray-700 rounded text-white focus:outline-none focus:border-[#45c7f2] max-w-[250px] overflow-hidden"
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
            <span className="text-white text-lg">Amount</span>
          </button>
        </div>

        <div className="flex justify-between w-full my-2">
          <div className="text-[15px] px-2 py-2 rounded text-blue-400 focus:outline-none focus:border-[#45c7f2] max-w-[150px]">
            {eth}
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
          onClick={() => deposit()}
          disabled={loading || !account}
          className="size-sm h-[43px] rounded-[6px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn flex items-center justify-center
                    cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 
                    hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)] w-full"
        >
          <span className="text-black text-[16px] font-medium">
            {loading ? "Processing..." : "Deposit"}
          </span>
        </button>
      </div>
      {children}
    </div>
  );
};

export default DepositModal;
