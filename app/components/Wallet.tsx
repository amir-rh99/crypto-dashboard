import { MenuItemInterface } from "../models/Menu"
import Menu from "./Menu"
import { getWalletHistory } from "../lib/walletHistory"
import WalletItem from "./WalletItem"

const walletHistory = getWalletHistory()

const WalletMenuItems: MenuItemInterface[] = [
  { title: 'Day' },
  { title: 'Week' },
  { title: 'Month' },
  { title: 'Year' }
]

const Wallet = () => {
  return (
    <div>
      <div className='flex justify-between items-center mb-2 md:mb-5'>
          <h6 className="text-title font-medium text-lg">Wallet</h6>
          <div>
            <Menu items={WalletMenuItems} />
          </div>
      </div>
      <div className="md:grid grid-cols-3 gap-10">
          <div className="mb-5 lg:mb-0">
            <img src="/images/chart.png" className="rounded-full mx-auto h-32 aspect-square lg:h-auto" />
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-2">
              { walletHistory.map(item => <WalletItem key={item.amount} walletItem={item} />) }
            </div>
          </div>
      </div>
    </div>
  )
}

export default Wallet