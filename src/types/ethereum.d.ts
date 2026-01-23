interface EthereumProvider {
  isMetaMask?: boolean;
  request: (args: {
    method: string;
    params?: unknown[] | object;
  }) => Promise<any>;
  on?: (event: string, callback: (...args: any[]) => void) => void;
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

export {};