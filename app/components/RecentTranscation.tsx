import React from 'react'
import { MenuItemInterface } from '../models/Menu'
import Menu from './Menu'
import TransactionList from './TransactionList'

const RecentTranscationMenuItems: MenuItemInterface[] = [
  { title: 'All' },
  { title: 'Buy' },
  { title: 'Sell' },
]

const RecentTranscation = () => {
  return (
    <div>
        <div className='flex justify-between items-center mb-5'>
          <h6 className="text-title font-medium text-lg">Recent Transaction</h6>
          <div>
            <Menu items={RecentTranscationMenuItems} />
          </div>
        </div>
        <TransactionList />
    </div>
  )
}

export default RecentTranscation