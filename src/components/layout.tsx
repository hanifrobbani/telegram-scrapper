'use client'
import Sidebar from "@/components/sidebar";
import { useState } from "react";
import ProjectPage from "@/components/pages/project";
import TelegramGroupPage from "@/components/pages/telegram";
import ScrapPage from "@/components/pages/scrapper";
import AIReportPage from "@/components/pages/ai-report";
import AISearchPage from "@/components/pages/ai-search";
import AISummarizePage from "@/components/pages/ai-summarize";

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
            title: "List Telegram",
            description: "Add or update the existing telegram group to get scrap"
        },
        "ai-report": {
            title: "List Telegram",
            description: "Add or update the existing telegram group to get scrap"
        },
        "ai-search": {
            title: "List Telegram",
            description: "Add or update the existing telegram group to get scrap"
        },
    }
    const [page, setPage] = useState<string>('scrapper')

    const handleChangePage = (data: string) => {
        setPage(data)
    }

    const activeTitlePage = titlePage[page] ? titlePage[page] : ""

    return (
        <div className="flex bg-slate-50 font-sans h-screen overflow-hidden">
            <Sidebar setPageUser={handleChangePage} />
            <main className="flex-1 overflow-y-auto p-5 space-y-4">
                <header className="p-2">
                    <h1 className="text-xl font-semibold">{activeTitlePage.title}</h1>
                    <p className="text-sm text-slate-500">{activeTitlePage.description}</p>
                </header>

                {page === 'scrapper' && <ScrapPage />}
                {page === 'project' && <ProjectPage />}
                {page === 'telegram-group' && <TelegramGroupPage />}
                {page === 'ai-summarizer' && <AISummarizePage />}
                {page === 'ai-search' && <AISearchPage />}
                {page === 'ai-report' && <AIReportPage />}
            </main>
        </div>
    )
}
