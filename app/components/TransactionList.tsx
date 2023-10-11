import { getRecentTransaction } from "../lib/recentTransaction"
import TransactionItem from "./TransactionItem"

const transactionList = getRecentTransaction()

const TransactionList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
      { transactionList.map(trans => <TransactionItem key={trans.date} transaction={trans} />) }
    </div>
  )
}

export default TransactionList