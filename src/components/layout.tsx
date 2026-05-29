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
import { ToasterItem, ToastVariant, ShowToast } from "@/types/toaster.type";

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
            description: "AI-powered search to find projects and relevant messages fomr scrapped data"
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
            <main className="flex-1 overflow-y-auto p-5 space-y-4">
                <header className="p-2">
                    <h1 className="text-xl font-semibold">{activeTitlePage.title}</h1>
                    <p className="text-sm text-slate-500">{activeTitlePage.description}</p>
                </header>

                {page === 'scrapper' && <ScrapPage showToast={showToast}/>}
                {page === 'project' && <ProjectPage showToast={showToast} toasts={toasts}/>}
                {page === 'telegram-group' && <TelegramGroupPage showToast={showToast} toasts={toasts}/>}
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
