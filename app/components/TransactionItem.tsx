import { TransactionInterface } from "../models/Transaction"

const TransactionItem = ({transaction}: {transaction: TransactionInterface}) => {
  return (
    <div className="flex justify-between">
        <div className="flex gap-2">
        <span>
          {transaction.crypto.icon}
        </span>
        <div className="flex flex-col">
            <span className="text-title text-sm font-medium">
              {transaction.crypto.name}
            </span>
            <span className="text-xs text-info font-medium">
              {transaction.type}
            </span>
        </div>
        </div>
        <div className="flex flex-col items-end">
            <span className="text-title text-sm">
              {transaction.amount}
            </span>
            <span className="text-info text-xs">
              {transaction.date}
            </span>
        </div>
    </div>
  )
}

export default TransactionItem