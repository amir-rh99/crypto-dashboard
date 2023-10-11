export type CryptoType = "BNB" | "BTC" | "BCH" | "ETH" | "USDT" | "YFI"

export interface CryptoInfoInterface {
    name: string
    id: CryptoType
    icon: React.ReactElement
}