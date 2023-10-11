import { CryptoPriceInterfcae } from "../models/CryptoPrice"
import Card from "./Card"

const Crypto = ({crypto}:{crypto: CryptoPriceInterfcae}) => {
  return (
    <Card>
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <span className="inline-block w-10 scale-150 origin-top-left">
                    {crypto.crypto.icon}
                </span>
                <img src={
                    crypto.increase ? '/images/chart3.png' : '/images/chart4.png'
                } />
            </div>
            <div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-title text-sm font-medium">
                            {crypto.crypto.name}
                        </span>
                        <span className="text-xs text-info font-medium">
                            {crypto.crypto.id}
                        </span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-title text-sm">
                            {crypto.price}
                        </span>
                        <span className={`${
                            crypto.increase ? 'text-green-500' : 'text-rose-500'
                        } text-xs`}>
                            {crypto.percent}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Card>
  )
}

export default Crypto