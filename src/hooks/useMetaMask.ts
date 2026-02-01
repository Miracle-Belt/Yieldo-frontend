import { useState, useEffect } from "react";
import { ethers } from "ethers";
import moduleName from "module";

export const useMetaMask = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  useEffect(() => {
    // On page load, try to restore the previous wallet connection from localStorage
    const storedAccount = localStorage.getItem("account");
    if (storedAccount) {
      setAccount(storedAccount);
      const web3Provider = new ethers.BrowserProvider(window.ethereum as any);
      setProvider(web3Provider);
    }

    // Listen for account changes and network changes
    if (window.ethereum) {
      window.ethereum.on?.("accountsChanged", handleAccountsChanged);
      window.ethereum.on?.("chainChanged", handleChainChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged,
        );
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, []);

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length > 0) {
      setAccount(accounts[0]);
      localStorage.setItem("account", accounts[0]);
    } else {
      setAccount(null);
      localStorage.removeItem("account");
    }
  };

  const handleChainChanged = () => {
    window.location.reload();
  };

  const connectWallet = async () => {
    // if (!window.ethereum) {
    //   window.open(
    //     "https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
    //     "_blank",
    //     "noopener,noreferrer",
    //   );
    //   return;
    // }
    if (window.ethereum) {
      try {
        const web3Provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await web3Provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
        setProvider(web3Provider);

        localStorage.setItem("account", accounts[0]);
        console.log(accounts[0]);

        await fetch("http://172.20.1.19:3001/v1/auth/siwe/start", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chainId: "0xaa36a7",
            address: accounts[0],
          }),
        });
      } catch (err) {
        console.error("Error connecting to wallet:", err);
      }
    } else {
      alert("MetaMask is not installed.");
    }
  };

  const disconnectWallet = async () => {
    setAccount(null);
    setProvider(null);
    localStorage.removeItem("account");
    localStorage.removeItem("provider");
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

  return { account, provider, connectWallet, disconnectWallet };
};
