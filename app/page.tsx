import {
  Balance,
  Card,
  CryptoList,
  RecentTranscation,
  Statistics,
  Transaction
} from "./components"

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-5">

      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <Card>
            <Balance />
          </Card>
        </div>
        <div>
          <Card>
            <RecentTranscation />
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
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