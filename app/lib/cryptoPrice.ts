import { CryptoPriceInterfcae } from "../models/CryptoPrice";
import { getCryptoInfo } from "./cryptoInfo";

const cryptoPriceList: CryptoPriceInterfcae[] = [
    {
        crypto: getCryptoInfo("BTC"),
        increase: false,
        percent: "2.01%",
        price: "$2,536.23"
    },
    {
        crypto: getCryptoInfo("BNB"),
        increase: true,
        percent: "4.5%",
        price: "$14,122.22"
    },
    {
        crypto: getCryptoInfo("ETH"),
        increase: true,
        percent: "7.23%",
        price: "$450.00"
    },
    {
        crypto: getCryptoInfo("USDT"),
        increase: false,
        percent: "1.05%",
        price: "$20,190.00"
    },
    {
        crypto: getCryptoInfo("YFI"),
        increase: true,
        percent: "7.23%",
        price: "$450.00"
    },
]

export const getCryptoPriceList = (): CryptoPriceInterfcae[] => {
    return cryptoPriceList
}