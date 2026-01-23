import React from "react";
import { useMetaMask } from "../hooks/useMetaMask";

const shortenAddress = (address: string) =>
  `${address.slice(0, 6)}...${address.slice(-4)}`;

const ConnectWallet: React.FC = () => {
  const { account, chainId, connectWallet } = useMetaMask();

  return (
    <div className="flex items-center justify-center">
      <div className="h-[50px]">
        {account ? (
          <>
            <p className="text-green-400 font-mono text-sm">
              Connected
            </p>
            <p className="mt-2 text-white">
              {shortenAddress(account)}
            </p>
            <p className="mt-1 text-gray-400 text-xs">
              Chain ID: {chainId}
            </p>
          </>
        ) : (
          <button 
            onClick={connectWallet}
            className="px-5 py-2.5 rounded border border-[rgba(69,199,242,0.2)] text-sm font-medium text-white cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]">
                    Connect MetaMask
        </button>
        )}
      </div>
    </div>
  );
};

export default ConnectWallet;