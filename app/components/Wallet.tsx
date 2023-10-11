import { getWalletHistory } from "../lib/walletHistory"
import WalletItem from "./WalletItem"

const walletHistory = getWalletHistory()

const Wallet = () => {
  return (
    <div className="flex flex-col gap-2">
      { walletHistory.map(item => <WalletItem key={item.amount} walletItem={item} />) }
    </div>
  )
}

export default Wallet