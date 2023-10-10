import React from 'react'
import TransactionList from './TransactionList'

const RecentTranscation = () => {
  return (
    <div>
        <h6 className="text-title font-medium text-lg mb-5">Recent Transaction</h6>
        <TransactionList />
    </div>
  )
}

export default RecentTranscation