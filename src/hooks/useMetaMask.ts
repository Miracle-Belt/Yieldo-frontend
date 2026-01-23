import { useState, useEffect } from "react";
import { ethers } from "ethers";

export const useMetaMask = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      window.open(
        "https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blank", "noopener,noreferrer");
      return;
    }

    try {
      const browserProvider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await browserProvider.send("eth_requestAccounts", []);
      const network = await browserProvider.getNetwork();

      setAccount(accounts[0]);
      setChainId(network.chainId.toString());
      setProvider(browserProvider);
    } catch (err) {
      console.error("Wallet connection failed", err);
    }
  };

  useEffect(() => {
    if (!window.ethereum) return;

    window.ethereum.on?.("accountsChanged", (accounts: string[]) => {
      setAccount(accounts.length ? accounts[0] : null);
    });

    window.ethereum.on?.("chainChanged", () => {
      window.location.reload();
    });
  }, []);

  return { account, chainId, provider, connectWallet };
};