import { AppLinks } from "../lib/links"
import Search from "./Search"

const links = AppLinks

const Sidebar = () => {
  return (
    <div className="p-4 w-full flex flex-col gap-5 h-full">
        <div>
            <Search />
        </div>
        <div className="flex flex-col justify-between h-full">
            <ul className="flex flex-col gap-5">
                {
                    links.map(link => (
                        <li key={link.title} 
                        className={`${
                            link.active ? 'text-title' : ''
                        } text-info cursor-pointer flex gap-2 `}>
                            <span>
                                {link.icon}
                            </span>
                            <span>
                                {link.title}
                            </span>
                        </li>
                    ))
                }
            </ul>
            <ul className="flex flex-col gap-5">
                <li className='text-info cursor-pointer flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    <span>
                        Messages
                    </span>
                </li>
                <li className='text-info cursor-pointer flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <span>
                        Notifications
                    </span>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Sidebar