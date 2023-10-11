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
                <button key={tab} 
                onClick={() => selectTab(tab)}
                className={`${
                    selectedTab == tab ? 'bg-body text-title !border-info/40' : 'text-info'
                } px-3 py-1 md:px-5 md:py-2 rounded-full border border-transparent text-xs lg:text-sm font-bold transition-all hover:text-title`}>
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default Tabs