type SidebarProps = {
  setPageUser: (page: string) => void
}
import { useState } from "react"
export default function Sidebar({setPageUser}: SidebarProps) {

    const [page, setPage] = useState('scrapper')

    const handleClickPage = (page: string) =>{
        setPage(page)
        setPageUser(page)
    }

    return (
        <div className="bg-slate-900 h-full min-w-60 pl-0.5 space-y-4 text-slate-200">
            <div className="p-4">
                <div className="flex items-start gap-2">
                    <div className="bg-blue-600 text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-lg">Telegram Scrapper</h1>
                        <p className="text-gray-400 text-sm">airdrop tracker</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className={`w-full font-semibold text-sm flex items-center gap-2 px-4 py-2 cursor-pointer ${page == 'scrapper' ? 'border-l-4 border-blue-700 bg-blue-800/30': 'border-l-4 border-transparent hover:border-l-4 hover:border-blue-700 hover:bg-blue-800/30 transition-colors'}`} onClick={() => handleClickPage('scrapper')}>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-database-export"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" /><path d="M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.183 -.086 3.15 -.241" /><path d="M20 12v-6" /><path d="M4 12v6c0 1.657 3.582 3 8 3c.157 0 .312 -.002 .466 -.005" /><path d="M16 19h6" /><path d="M19 16l3 3l-3 3" /></svg>
                    </div>
                    <p>Scrap Announcement</p>
                </div>
                <div className={`w-full font-semibold text-sm flex items-center gap-2 px-4 py-2 cursor-pointer ${page == 'project' ? 'border-l-4 border-blue-700 bg-blue-800/30': 'border-l-4 border-transparent hover:border-l-4 hover:border-blue-700 hover:bg-blue-800/30 transition-colors'}`} onClick={() => handleClickPage('project')}>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-folder"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" /></svg>
                    </div>
                    <p>Project</p>
                </div>
                <div className={`w-full font-semibold text-sm flex items-center gap-2 px-4 py-2 cursor-pointer ${page == 'telegram-group' ? 'border-l-4 border-blue-700 bg-blue-800/30': 'border-l-4 border-transparent hover:border-l-4 hover:border-blue-700 hover:bg-blue-800/30 transition-colors'}`} onClick={() => handleClickPage('telegram-group')}>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></svg>
                    </div>
                    <p>Telegram Group</p>
                </div>
            </div>
        </div>
    )
}