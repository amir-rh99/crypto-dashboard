'use client'

import { Menu as HeadMenu, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { MenuItemInterface } from "../models/Menu"

interface Props {
    transactionMenu?: boolean
    items: MenuItemInterface[]
}

const Menu = ({transactionMenu = false, items}: Props) => {

    const [selectedItem, setSelectedItem] = useState(items[0])

    return (
        <HeadMenu as="div" className="relative">
            <div>
            <HeadMenu.Button 
            className={`${
                transactionMenu ? 'divide-x-2 divide-info/40 p-4' : 'justify-between py-1 px-4'
            } bg-body border border-info/40 rounded-full flex items-center w-full transition-all hover:border-info`}>
                {
                    transactionMenu ? 
                    (
                        <>
                            <div className='flex items-center gap-2 pr-2'>
                                <span>
                                    {selectedItem.icon}
                                </span>
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 stroke-info">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                </span>
                            </div>
                            <div className='pl-2 font-medium'>
                                <span className='text-title text-sm'>{selectedItem.title}</span>
                                <span className='text-info px-2 text-xs'>{selectedItem.description}</span>
                            </div>
                        </>
                    ) :
                    (
                        <>
                            <div className='font-medium'>
                                <span className='text-title text-sm'>{selectedItem.title}</span>
                            </div>
                            <div className='flex items-center gap-2 pl-2'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 stroke-info">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </div>
                        </>
                    )
                }
            </HeadMenu.Button>
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
                <HeadMenu.Items className={`${
                    transactionMenu ? 'w-56' : 'w-40 right-0'
                } absolute mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-body border border-info/60 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10`}>
                <div className="px-1 py-1 flex flex-col gap-1">
                    {
                    items.map(item => (
                        <HeadMenu.Item key={item.title}>
                        {({ active }: any) => (
                            <button
                            onClick={() => setSelectedItem(item)}
                            className={`${
                                (active || selectedItem.title == item.title) && 'bg-info/40'
                            } text-title group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                            {
                                item.icon && (
                                    <span>
                                        {item.icon}
                                    </span>
                                )
                            }
                            <span>
                                {item.title}
                            </span>
                            </button>
                        )}
                        </HeadMenu.Item>
                    ))
                    }
                </div>
                </HeadMenu.Items>
            </Transition>
        </HeadMenu>
    )
}

export default Menu