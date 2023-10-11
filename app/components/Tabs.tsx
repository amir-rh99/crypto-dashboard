"use client"

import { useState } from "react"

interface Props {
    tabs: string[]
}

const Tabs = ({tabs}:Props) => {

    const [selectedTab, selectTab] = useState<string>(tabs[0])
    
    return (
        <div className='flex justify-between'>
            {tabs.map(tab => (
                <button onClick={() => selectTab(tab)}
                className={`${
                    selectedTab == tab ? 'bg-body text-title' : 'text-info'
                } px-5 py-2 rounded-full text-sm font-bold transition-all`}>
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default Tabs