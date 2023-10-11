import {
  Balance,
  Card,
  CryptoList,
  RecentTranscation,
  Statistics,
  Transaction
} from "./components"
import Wallet from "./components/Wallet"

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-5">

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="grid gap-5 lg:gap-0 lg:col-span-2">
          <Card>
            <Balance />
          </Card>
          <div className="lg:hidden">
            <Card>
              <Wallet />
            </Card>
          </div>
        </div>
        <div>
          <Card>
            <RecentTranscation />
          </Card>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Card>
            <Statistics />
          </Card>
        </div>
        <div>
          <Card>
            <Transaction />
          </Card>
        </div>
      </div>

      <div>
        <CryptoList />
      </div>
    </div>
  )
}