"use client"

import { MenuItemInterface } from '../models/Menu'
import Menu from './Menu'
import Tabs from './Tabs'

const cryptoMenuItems: MenuItemInterface[] = [
  {
    title: "Bitcoin",
    description: "BTC",
    icon: (
      <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g></svg>    
  )
  },
  {
    title: "Binance",
    description: "BNB",
    icon: (
      <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><circle cx="16" cy="16" r="16" fill="#F3BA2F"/><path fill="#FFF" d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"/></g></svg>
    )
  },
  {
    title: "Ethereum",
    description: "ETH",
    icon: (
      <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#B06DDE"/><g fill="#FFF" fillRule="nonzero"><path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/></g></g></svg>
    )
  },
]

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
            <Menu transactionMenu={true} items={[{title: '$25,000.00', description: '0.175684 BTC'}]} />
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