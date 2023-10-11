import { getCryptoPriceList } from "../lib/cryptoPrice"
import Crypto from "./Crypto"

const cryptoPriceList = getCryptoPriceList()

const CryptoList = () => {
  return (
    <div className="grid grid-cols-5 gap-5">
        { cryptoPriceList.map(item => <Crypto key={item.crypto.name} crypto={item} />) }
    </div>
  )
}

export default CryptoList