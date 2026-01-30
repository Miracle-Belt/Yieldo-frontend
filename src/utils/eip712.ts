// export const domain = {
//   name: "YieldoDepositRouter",
//   version: "1",
//   chainId: 0xaa36a7,
//   verifyingContract: "0x4A8f63BACa4F255c30DcBb6565d017EDA2481D1c",
// };

export const types = {
  DepositIntent: [
    { name: "user", type: "address" },
    { name: "vault", type: "address" },
    { name: "asset", type: "address" },
    { name: "amount", type: "uint256" },
    { name: "nonce", type: "uint256" },
    { name: "deadline", type: "uint256" },
    { name: "kolAddress", type: "address" },
  ],
};
