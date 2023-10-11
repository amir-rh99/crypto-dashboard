import { TransactionInterface } from "../models/Transaction"
import { getCryptoInfo } from "./cryptoInfo"

const recentTransactionList: TransactionInterface[] = [
    {
        crypto: getCryptoInfo("BTC"),
        type: "Buy",
        date: "Today, 10:20 AM",
        amount: "$2,536.23"
    },
    {
        crypto: getCryptoInfo("ETH"),
        type: "Recieve",
        date: "Today, 10:18 AM",
        amount: "+5.521 ETH"
    },
    {
        crypto: getCryptoInfo("BCH"),
        type: "Buy",
        date: "Today, 10:10 AM",
        amount: "$20,190.00"
    },
    {
        crypto: getCryptoInfo("BNB"),
        type: "Sell",
        date: "Today, 9:50 AM",
        amount: "$14,122.22"
    },
]

export const getRecentTransaction = (): TransactionInterface[] => {
    return recentTransactionList
}