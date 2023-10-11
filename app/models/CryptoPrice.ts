import { CryptoInfoInterface } from "./Crypto";

export interface CryptoPriceInterfcae {
    crypto: CryptoInfoInterface
    price: string
    percent: string
    increase: boolean
}