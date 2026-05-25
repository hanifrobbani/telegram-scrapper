'use client'
import Sidebar from "@/components/sidebar";
import { useState } from "react";
import ProjectPage from "@/components/pages/project";
import TelegramGroupPage from "@/components/pages/telegram";
import ScrapPage from "@/components/pages/scrapper";

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
        }
    }
    const [page, setPage] = useState<string>('scrapper')

    const handleChangePage = (data: string) => {
        setPage(data)
    }

    const activeTitlePage = titlePage[page]

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
            </main>
        </div>
    )
}
