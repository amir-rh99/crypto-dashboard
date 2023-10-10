import TotalBalance from "./TotalBalance"
import Wallet from "./Wallet"

const Balance = () => {
  return (
    <div className="grid grid-cols-2">
        <div>
        <h6 className="text-title font-medium text-lg mb-5">Total Balance</h6>
        <TotalBalance />
        </div>
        <div>
        <h6 className="text-title font-medium text-lg mb-5">Wallet</h6>
        <div className="grid grid-cols-3 gap-10">
            <div>
            <img src="/images/chart.png" className="rounded-full" />
            </div>

            <div className="col-span-2">
            <Wallet />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Balance