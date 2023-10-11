import { WalletHistoryInterface } from "../models/WalletHistory";
import { getCryptoInfo } from "./cryptoInfo";

const walletHistoryList: WalletHistoryInterface[] = [
    {
        crypto: getCryptoInfo("YFI"),
        increase: false,
        percent: "1.05%",
        amount: "+$20,190.00"
    },
    {
        crypto: getCryptoInfo("ETH"),
        increase: true,
        percent: "7.23%",
        amount: "+$450.00"
    },
    {
        crypto: getCryptoInfo("BNB"),
        increase: true,
        percent: "4.5%",
        amount: "-$14,122.22"
    },
    {
        crypto: getCryptoInfo("BTC"),
        increase: false,
        percent: "2.01%",
        amount: "+$2,536.23"
    },
]

export const getWalletHistory = (): WalletHistoryInterface[] => {
    return walletHistoryList
}