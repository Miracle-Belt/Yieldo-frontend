export const domain = {
    name: "YieldoDepositRouter",
    version: "1",
    chainId: 0xaa36a7,
    verifyingContract: "0xbab898bD8D4799E62a521dbca8B2aCCc00957086",
  }
  
  export const types = {
    DepositIntent: [
      { name: "user", type: "address" },
      { name: "vault", type: "address" },
      { name: "kol", type: "address" },
      { name: "grossAssets", type: "uint256" },
      { name: "deadline", type: "uint256" },
      { name: "nonce", type: "uint256" },
    ],
  }