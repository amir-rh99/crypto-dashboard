import { CryptoInfoInterface } from "./Crypto";

export interface WalletHistoryInterface {
    crypto: CryptoInfoInterface
    amount: string
    percent: string
    increase: boolean
}