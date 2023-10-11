import { getRecentTransaction } from "../lib/recentTransaction"
import TransactionItem from "./TransactionItem"

const transactionList = getRecentTransaction()

const TransactionList = () => {
  return (
    <div className="flex flex-col gap-2">
      { transactionList.map(trans => <TransactionItem key={trans.date} transaction={trans} />) }
    </div>
  )
}

export default TransactionList