import { CryptoInfoInterface } from "./Crypto";

type TransactionType = "Buy" | "Sell" | "Send" | "Recieve"

export interface TransactionInterface {
    crypto: CryptoInfoInterface,
    type: TransactionType,
    date: string,
    amount: string
}