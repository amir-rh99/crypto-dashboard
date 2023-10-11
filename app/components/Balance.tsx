import { MenuItemInterface } from "../models/Menu"
import Menu from "./Menu"
import TotalBalance from "./TotalBalance"
import Wallet from "./Wallet"

const WalletMenuItems: MenuItemInterface[] = [
  { title: 'Day' },
  { title: 'Week' },
  { title: 'Month' },
  { title: 'Year' }
]

const Balance = () => {
  return (
    <div className="grid grid-cols-2">
        <div>
          <h6 className="text-title font-medium text-lg mb-5">Total Balance</h6>
          <TotalBalance />
        </div>

        <div>
          <div className='flex justify-between items-center mb-5'>
            <h6 className="text-title font-medium text-lg">Wallet</h6>
            <div>
              <Menu items={WalletMenuItems} />
            </div>
          </div>
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