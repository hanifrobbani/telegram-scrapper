type SidebarProps = {
    setPageUser: (page: string) => void
    onChangePage: (page: string) => void
}

import Image from "next/image"
import { useState } from "react"
import { IconFolderFilled, IconUsersGroup, IconDatabaseExport, IconLogout, IconChevronUp, IconSparkles, IconChevronDown, IconFileSearch, IconChartPieFilled, IconFileAnalyticsFilled } from '@tabler/icons-react';

export default function Sidebar({ setPageUser }: SidebarProps) {
    const aiTools = [
        { id: 'ai-summarizer', label: 'AI Summarizer', icon: <IconFileAnalyticsFilled size={17} /> },
        { id: 'ai-search', label: 'Smart Search', icon: <IconFileSearch size={17} /> },
        { id: 'ai-report', label: 'Data Report', icon: <IconChartPieFilled size={17} /> },
    ];

    const [aiToolsOpen, setAiToolsOpen] = useState(false);
    const [page, setPage] = useState('scrapper')

    const handleClickPage = (page: string) => {
        setPage(page)
        setPageUser(page)
    }

    return (
        <>
            <div className="bg-slate-900 h-full min-w-40 pl-0.5 space-y-4 text-slate-200 flex flex-col justify-between">
                <div className="">
                    <div className="p-4">
                        <div className="flex items-start gap-2">
                            <Image src={'/telegram.png'} width={30} height={30} alt="telegram icon" />
                            <div className="flex flex-col">
                                <h1 className="font-semibold">Telegram Scrapper</h1>
                                <p className="text-gray-300 text-sm">airdrop tracker</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className={`w-full font-semibold text-sm flex items-center gap-2 px-4 py-2 cursor-pointer ${page == 'scrapper' ? 'border-l-4 border-blue-700 bg-blue-800/30' : 'border-l-4 border-transparent hover:border-l-4 hover:border-blue-700 hover:bg-blue-800/30 transition-colors'}`} onClick={() => handleClickPage('scrapper')}>
                            <div className="">
                                <IconDatabaseExport size={24} />
                            </div>
                            <p>Scrap Message</p>
                        </div>
                        <div className="w-full">
                            <div className={`w-full font-semibold text-sm flex items-center justify-between gap-2 px-4 py-2 cursor-pointer select-none ${aiToolsOpen ? 'border-l-4 border-blue-700 bg-blue-800/30': 'border-l-4 border-transparent hover:border-blue-700 hover:bg-blue-800/30 transition-colors'}`}onClick={() => setAiToolsOpen(prev => !prev)}>
                                <div className="flex items-center gap-2">
                                    <IconSparkles size={22} />
                                    <span>AI Tools</span>
                                </div>
                                <IconChevronDown
                                    size={16}
                                    className="transition-transform duration-300 ease-in-out"
                                    style={{ transform: aiToolsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </div>

                            <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: aiToolsOpen ? '300px' : '0px', opacity: aiToolsOpen ? 1 : 0 }}>
                                <div className="py-1">
                                    {aiTools.map((tool) => (
                                        <div key={tool.id} className={`flex items-center gap-2.5 pl-7 pr-4 py-2 text-[13px] font-medium cursor-pointer transition-colors duration-150 ${page === tool.id ? 'border-l-4 border-blue-700 bg-blue-800/20 text-slate-200' : 'border-l-4 border-transparent text-slate-400 hover:border-blue-700 hover:bg-blue-800/15 hover:text-slate-300'}`} onClick={() => handleClickPage(tool.id)}>
                                            {tool.icon}
                                            <span>{tool.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`w-full font-semibold text-sm flex items-center gap-2 px-4 py-2 cursor-pointer ${page == 'project' ? 'border-l-4 border-blue-700 bg-blue-800/30' : 'border-l-4 border-transparent hover:border-l-4 hover:border-blue-700 hover:bg-blue-800/30 transition-colors'}`} onClick={() => handleClickPage('project')}>
                            <div className="">
                                <IconFolderFilled size={24} />
                            </div>
                            <p>Project</p>
                        </div>
                        <div className={`w-full font-semibold text-sm flex items-center gap-2 px-4 py-2 cursor-pointer ${page == 'telegram-group' ? 'border-l-4 border-blue-700 bg-blue-800/30' : 'border-l-4 border-transparent hover:border-l-4 hover:border-blue-700 hover:bg-blue-800/30 transition-colors'}`} onClick={() => handleClickPage('telegram-group')}>
                            <div className="">
                                <IconUsersGroup size={24} />
                            </div>
                            <p>Telegram Group</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}