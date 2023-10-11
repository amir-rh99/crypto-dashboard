import TotalBalance from "./TotalBalance"
import Wallet from "./Wallet"

const Balance = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 lg:gap-0">
        <div>
          <TotalBalance />
        </div>
        <div className="hidden lg:block">
          <Wallet />
        </div>
    </div>
  )
}

export default Balance