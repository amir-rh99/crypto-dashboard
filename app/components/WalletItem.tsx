import { WalletHistoryInterface } from "../models/WalletHistory"

const WalletItem = ({walletItem}: {walletItem: WalletHistoryInterface}) => {
  return (
    <div className="flex justify-between">
        <div className="flex gap-2">
        <span>
            {walletItem.crypto.icon}
        </span>
        <div className="flex flex-col">
            <span className="text-title text-sm font-medium">
                {walletItem.crypto.name}
            </span>
            <span className="text-xs text-info font-medium">
                {walletItem.crypto.id}
            </span>
        </div>
        </div>
        <div className="flex flex-col items-end">
        <span className="text-title text-sm">
            {walletItem.amount}
        </span>
        <span className={`${
            walletItem.increase ? 'text-green-500' : 'text-rose-500'
        } text-xs`}>
            {walletItem.percent}
        </span>
        </div>
    </div>
  )
}

export default WalletItem