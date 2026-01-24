import Web3 from "web3"

export const getWeb3 = () => {
  if (!window.ethereum) throw new Error("MetaMask required")
  return new Web3(window.ethereum)
}