export type DepositIntent = {
    user: string
    vault: string
    kol: string
    grossAssets: string
    deadline: number
    nonce: number
  }