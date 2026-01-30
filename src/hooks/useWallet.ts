import { useState } from "react";

export function useWallet() {
  const [account, setAccount] = useState<string>("");

  const connect = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  };

  return { account, connect };
}
