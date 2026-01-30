import React, { useEffect } from "react";
import { useState } from "react";
import ethereumIcon from "../../assets/images/icons/ethereum.png";
import depositRouter from "../../assets/YieldoDepositRouter.json";
import mockUSDC from "../../assets/MockUSDC.json";
import { types } from "../../utils/eip712";
import { ethers } from "ethers";
import { useMetaMask } from "../../hooks/useMetaMask";

// This would be loaded from deployment file or env
const DEPLOYMENT = {
  DepositRouter: "0x6aEF06B6F8bAE2e2877D1f6f2417B7Ac93f5C20f".toLowerCase(),
  MockLagoonVault: "0xE711750dF0dfb5aDB0142bD64EE0Ef2eF1453b88".toLowerCase(),
  MockUSDC: "0x2e96B06907378F9A503f7Eeb6CbF6d06cA6Bf1C8".toLowerCase(),
};
// KOL address (for demo, using a placeholder - in production this would be from URL params)
const kolAddress = "0x4A8f63BACa4F255c30DcBb6565d017EDA2481D1c".toLowerCase();

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

    await window.ethereum?.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xaa36a7" }], // Sepolia
    });

    try {
      setLoading(true);
      // Get signer and contracts
      const signer = await provider.getSigner();
      // const chainId = (await provider.getNetwork()).chainId;
      const chainId = "0xaa36a7";
      const usdc = new ethers.Contract(
        DEPLOYMENT.MockUSDC,
        mockUSDC.abi,
        signer,
      );
      const router = new ethers.Contract(
        DEPLOYMENT.DepositRouter,
        depositRouter.abi,
        signer,
      );
      const depositAmount = ethers.parseUnits(amount, 6); // USDC has 6 decimals
      const nonce = Date.now();
      const deadline = Math.floor(Date.now() / 1000) + 3600; // 1 hour

      // Create intent
      const intent = {
        user: account,
        vault: DEPLOYMENT.MockLagoonVault,
        asset: DEPLOYMENT.MockUSDC,
        amount: depositAmount,
        nonce: nonce,
        deadline: deadline,
        kolAddress: kolAddress,
      };

      // Sign with EIP-712
      const domain = {
        name: "YieldoDepositRouter",
        version: "1",
        chainId: chainId,
        verifyingContract: DEPLOYMENT.DepositRouter,
      };
      const signature = await signer.signTypedData(domain, types, intent);
      console.log("types  =  ", types);
      console.log("intent  =  ", intent);
      console.log("signature  =  ", signature);
      // Approve USDC
      const approveTx = await usdc.approve(account, depositAmount);
      await approveTx.wait();

      console.log("depositTx", intent, signature);

      // Execute deposit
      const depositTx = await router.verifyAndDeposit(intent, signature);
      const receipt = await depositTx.wait();

      // const depositTx = await router.verifyAndDeposit(intent, signature);
      alert(`Deposit successful! Tx: ${receipt.hash}`);
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
