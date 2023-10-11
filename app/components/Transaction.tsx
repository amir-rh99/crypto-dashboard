"use client"

import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Tabs from './Tabs'

interface CryptoInterface {
  name: string
  id: string
  icon: React.ReactElement
}

const cryptoMenuItems: CryptoInterface[] = [
  {
    name: "Bitcoin",
    id: "BTC",
    icon: (
      <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g></svg>    
  )
  },
  {
    name: "Binance",
    id: "BNB",
    icon: (
      <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><circle cx="16" cy="16" r="16" fill="#F3BA2F"/><path fill="#FFF" d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"/></g></svg>
    )
  },
  {
    name: "Ethereum",
    id: "ETH",
    icon: (
      <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#B06DDE"/><g fill="#FFF" fillRule="nonzero"><path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/></g></g></svg>
    )
  },
]

const Transaction = () => {

  const [selectedCrypto, selectCrypto] = useState<CryptoInterface>(cryptoMenuItems[0])

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
            <Menu as="div" className="relative">
            <div>
              <Menu.Button 
              className="bg-body border border-info/40 rounded-full p-4 flex items-center divide-x-2 divide-info/40 w-full transition-all hover:border-info">
                <div className='flex items-center gap-2 pr-2'>
                  <span>
                    {selectedCrypto.icon}
                  </span>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 stroke-info">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                  </span>
                </div>
                <div className='pl-2 font-medium'>
                  <span className='text-title text-sm'>{selectedCrypto.name}</span>
                  <span className='text-info px-2 text-xs'>{selectedCrypto.id}</span>
                </div>
              </Menu.Button>
            </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-body border border-info/60 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="px-1 py-1 flex flex-col gap-1">
                      {
                        cryptoMenuItems.map(crypto => (
                          <Menu.Item key={crypto.id}>
                            {({ active }: any) => (
                              <button
                                onClick={() => selectCrypto(crypto)}
                                className={`${
                                  (active || selectedCrypto.id == crypto.id) && 'bg-info/40'
                                } text-title group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                <span>
                                  {crypto.icon}
                                </span>
                                <span>
                                  {crypto.name}
                                </span>
                              </button>
                            )}
                          </Menu.Item>
                        ))
                      }
                    </div>
                  </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative">
            <div>
              <Menu.Button 
              className="bg-body border border-info/40 rounded-full p-4 flex items-center divide-x-2 divide-info/40 w-full transition-all hover:border-info">
                <div className='flex items-center gap-2 pr-2'>
                  <span>
                    <svg className='w-6 fill-rose-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.5-12.846c0-2.523-1.576-3.948-5.263-4.836v-4.44c1.14.234 2.231.725 3.298 1.496l1.359-2.196a9.49 9.49 0 00-4.56-1.776V6h-2.11v1.355c-3.032.234-5.093 1.963-5.093 4.486 0 2.64 1.649 3.925 5.19 4.813v4.58c-1.577-.234-2.886-.935-4.269-2.01L9.5 21.35a11.495 11.495 0 005.724 2.314V26h2.11v-2.313c3.08-.257 5.166-1.963 5.166-4.533zm-7.18-5.327c-1.867-.537-2.327-1.168-2.327-2.15 0-1.027.8-1.845 2.328-1.962zm4.318 5.49c0 1.122-.873 1.893-2.401 2.01v-4.229c1.892.538 2.401 1.168 2.401 2.22z" fillRule="evenodd"/></svg>
                  </span>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}       stroke="currentColor" className="w-4 stroke-info">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                  </span>
                </div>
                <div className='pl-2 font-medium'>
                  <span className='text-title text-sm'>$2,500.00</span>
                  <span className='text-info px-2 text-xs'>0.1925453 BTC</span>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-body border border-info/60 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }: any) => (
                        <button
                          className={`${
                            active && 'bg-info/40'
                          } text-title group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                        >

                          Edit
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
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