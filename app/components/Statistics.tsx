import React from 'react'
import Tabs from './Tabs'

const Statistics = () => {
  return (
    <div>
        <div className='flex justify-between items-center mb-5'>
          <h6 className="text-title font-medium text-lg">Statistics</h6>
          <div>
            <Tabs tabs={['1h', '1d', '1w', '2w', '1m', '1y']} />
          </div>
        </div>
        <div>
            <img src="/images/chart2.png" className="w-full"/>
        </div>
    </div>
  )
}

export default Statistics