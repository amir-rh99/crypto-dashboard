import { getCryptoInfo } from '../lib/cryptoInfo'
import { MenuItemInterface } from '../models/Menu'
import Menu from './Menu'
import Tabs from './Tabs'

const cryptoList = [
  getCryptoInfo("BTC"),
  getCryptoInfo("BNB"),
  getCryptoInfo("ETH"),
  getCryptoInfo("USDT"),
]

const cryptoMenuItems: MenuItemInterface[] = cryptoList.map(crypto => ({title: crypto.name, description: crypto.id, icon: crypto.icon}))

const Transaction = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div>
          <Tabs tabs={['Buy', 'Sell', 'Send', 'Recieve']} />
        </div>

        <div className="flex justify-center items-center gap-5 font-semibold">
          <span>
              <span className="text-title text-xl mx-1">1</span>
              <span className="text-info text-xs">BTC</span>
          </span>
          <span>
              <svg  className="w-5 h-5 stroke-title" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
          </span>
          <span>
              <span className="text-title text-xl mx-1">42,565.20</span>
              <span className="text-info text-xs">USD</span>
          </span>
        </div>
        
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-5'>
            <Menu transactionMenu={true} items={cryptoMenuItems} />
            <Menu transactionMenu={true} 
            items={[
              { 
                title: '$25,000.00', 
                description: '0.175684 BTC',
                icon: <svg className='w-6 fill-rose-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.5-12.846c0-2.523-1.576-3.948-5.263-4.836v-4.44c1.14.234 2.231.725 3.298 1.496l1.359-2.196a9.49 9.49 0 00-4.56-1.776V6h-2.11v1.355c-3.032.234-5.093 1.963-5.093 4.486 0 2.64 1.649 3.925 5.19 4.813v4.58c-1.577-.234-2.886-.935-4.269-2.01L9.5 21.35a11.495 11.495 0 005.724 2.314V26h2.11v-2.313c3.08-.257 5.166-1.963 5.166-4.533zm-7.18-5.327c-1.867-.537-2.327-1.168-2.327-2.15 0-1.027.8-1.845 2.328-1.962zm4.318 5.49c0 1.122-.873 1.893-2.401 2.01v-4.229c1.892.538 2.401 1.168 2.401 2.22z" fillRule="evenodd"/></svg>
              }
            ]} />
          </div>
          <button className='bg-primary/90 py-5 rounded-full text-title font-bold hover:bg-primary transition-all'>
            Proccess to Wallet
          </button>
          <p className='text-info text-sm text-center px-20 font-medium'>
            The final amount could change depending on the market conditions.
          </p>
        </div>
    </div>
  )
}

export default Transaction