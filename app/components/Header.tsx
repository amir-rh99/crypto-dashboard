"use client"

import { useState } from "react"
import UserMenu from "./UserMenu"
import Sidebar from "./Sidebar"
import { AppLinks } from "../lib/links"
import Search from "./Search"

const links = AppLinks

const Header = () => {

    const [sidebar, setSidebar] = useState(false)
    
    const handleSidebar = () => {
        setSidebar(!sidebar)
        if(!sidebar) window.document.body.style.overflow = 'hidden'
        else window.document.body.style.overflow = 'auto'
    }

    return (
        <>
            <nav className="container mx-auto bg-body px-2 py-3 lg:py-5 flex items-center justify-between sticky top-0" style={{zIndex: 5}}>
                <div className="flex items-center gap-10">
                    <div className="flex gap-2 items-center">
                        <svg className="w-8 stroke-info cursor-pointer lg:hidden" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        onClick={handleSidebar}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <img src="/images/logo.png" alt="logo" className="h-6" />
                    </div>

                    <div className="hidden lg:flex items-center gap-10">
                        <div>
                            <Search />
                        </div>
                        <ul className="flex gap-5">
                            {
                                links.map(link => (
                                    <li key={link.title} 
                                    className={`text-info cursor-pointer ${link.active ? 'text-title' : ''} font-medium`}>
                                        {link.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <div className="hidden lg:flex gap-2">
                        <span className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-title" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            <span className="w-2 h-2 rounded-full bg-primary absolute top-0 right-0"></span>
                        </span>
                        <span className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-title" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                            <span className="w-2 h-2 rounded-full bg-primary absolute top-0 right-1"></span>
                        </span>
                    </div>
                    <UserMenu />
                </div>
            </nav>
            <div className={`${
                sidebar ? 'z-20 bg-body/80' : '-z-10'
            } fixed top-0 left-0 right-0 bottom-0 `}
            onClick={handleSidebar}>
                <div onClick={e => e.stopPropagation()}
                className={`${
                    sidebar ? 'left-0' : '-left-60'
                } bg-body fixed top-0 border-r border-info/40 bottom-0 w-52 transition-all`}>
                    <Sidebar />
                </div>
            </div>
        </>
    )
}

export default Header