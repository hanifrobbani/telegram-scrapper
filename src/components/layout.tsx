'use client'
import Sidebar from "@/components/sidebar";
import { useState } from "react";
import ProjectPage from "@/components/pages/project";
import TelegramGroupPage from "@/components/pages/telegram";
import ScrapPage from "@/components/pages/scrapper";
import AIReportPage from "@/components/pages/ai-report";
import AISearchPage from "@/components/pages/ai-search";
import AISummarizePage from "@/components/pages/ai-summarize";
import Toaster from "./ui/modalToaster";
import { ToasterItem, ShowToast } from "@/types/toaster.type";
import { IconSettings, IconLogout, IconUserCog, IconChevronRight, IconMoon } from '@tabler/icons-react';
import { DropdownMenu } from "@/components/ui/DropdownMenu";

export default function LayoutPage() {
    const titlePage: any = {
        scrapper: {
            title: "Announcement & Message",
            description: "Scrape & filter project message & announcements"
        },
        project: {
            title: "List Project",
            description: "Add or update the existing crypto project"
        },
        "telegram-group": {
            title: "List Telegram",
            description: "Add or update the existing telegram group to get scrap"
        },
        "ai-summarizer": {
            title: "AI Summary",
            description: "Generate summary from scrapped telegram messages powered by AI"
        },
        "ai-report": {
            title: "AI Report",
            description: "Generate a data report for the selected time period from your scraped data."
        },
        "ai-search": {
            title: "Smart Search",
            description: "AI-powered search to find projects and relevant messages from scrapped data"
        },
    }
    const [page, setPage] = useState<string>('scrapper')
    const [toasts, setToasts] = useState<ToasterItem[]>([])

    const handleChangePage = (data: string) => {
        setPage(data)
    }

    const activeTitlePage = titlePage[page] ? titlePage[page] : ""

    const showToast: ShowToast = (type, message) => {
        const id = Date.now()

        setToasts(prev => [
            ...prev,
            { id, type, message }
        ])

        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id))
        }, 3000)
    }

    return (
        <div className="flex bg-slate-50 font-sans h-screen overflow-hidden">
            <Sidebar setPageUser={handleChangePage} />
            <main className="flex-1 overflow-y-auto px-5 space-y-4">
                <header className="p-2 flex justify-between items-center">
                    <div className="">
                        <h1 className="text-xl font-semibold">{activeTitlePage.title}</h1>
                        <p className="text-sm text-slate-500">{activeTitlePage.description}</p>
                    </div>
                    <div className="">
                        <DropdownMenu
                            align="left"
                            trigger={
                                <div className="bg-white p-2 rounded-md shadow-sm text-slate-600 hover:bg-gray-100 cursor-pointer transition-colors">
                                    <IconSettings size={22} />
                                </div>
                            }>
                            <div className="flex items-center gap-3 px-4 py-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
                                    N
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">Nick Admin</p>
                                    <p className="text-xs text-slate-500">admin@example.com</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100" />

                            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left cursor-pointer">
                                <IconUserCog size={20} className="text-slate-500" />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-700">User Settings</p>
                                    <p className="text-xs text-slate-400">Manage your profile and preferences</p>
                                </div>
                                <IconChevronRight size={16} className="text-slate-400" />
                            </button>

                            <div className="border-t border-gray-100" />

                            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-left text-red-500 cursor-pointer">
                                <IconLogout size={20} />
                                <div>
                                    <p className="text-sm font-medium">Logout</p>
                                    <p className="text-xs text-red-500">Sign out from your account</p>
                                </div>
                            </button>
                        </DropdownMenu>
                    </div>
                </header>

                {page === 'scrapper' && <ScrapPage showToast={showToast} />}
                {page === 'project' && <ProjectPage showToast={showToast} toasts={toasts} />}
                {page === 'telegram-group' && <TelegramGroupPage showToast={showToast} toasts={toasts} />}
                {page === 'ai-summarizer' && <AISummarizePage />}
                {page === 'ai-search' && <AISearchPage />}
                {page === 'ai-report' && <AIReportPage />}

                {toasts.map(toast => (
                    <Toaster
                        key={toast.id}
                        type={toast.type}
                        message={toast.message}
                        isOpen={true}
                        onClose={() => {
                            setToasts(prev =>
                                prev.filter(t => t.id !== toast.id)
                            )
                        }}
                        autoClose={true}
                        duration={3000}
                    />
                ))}
            </main>
        </div>
    )
}
