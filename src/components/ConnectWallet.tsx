import React from "react";
import { useMetaMask } from "../hooks/useMetaMask";
import { useEffect, useRef } from "react";

const shortenAddress = (address: string) =>
  `${address.slice(0, 6)}...${address.slice(-4)}`;

const ConnectWallet: React.FC = () => {
  const { account, connectWallet, disconnectWallet } = useMetaMask();

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    const storedAccount = localStorage.getItem("account");
    if (storedAccount) {
      connectWallet(); // Automatically reconnect if account is stored
    }

    // if (localStorage.get("account"))
  }, []);

  return (
    <div>
      {account ? (
        <button
          onClick={disconnectWallet}
          className="px-5 py-2.5 rounded border border-[rgba(69,199,242,0.2)] text-sm font-medium text-white cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]"
        >
          {shortenAddress(account)}
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="px-5 py-2.5 rounded border border-[rgba(69,199,242,0.2)] text-sm font-medium text-white cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]"
        >
          {"Connect MetaMask"}
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
