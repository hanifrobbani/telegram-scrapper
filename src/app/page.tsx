'use client'
import MainPage from "@/components/main";
import Sidebar from "@/components/sidebar";
import { useState } from "react";
import ProjectPage from "@/components/section/project/Projects";
import TelegramGroupPage from "@/components/section/telegram/TelegramGroup";

export default function Home() {
  const [page, setPage] = useState<string>('scrapper')

  const handleChangePage = (data: string) => {
    setPage(data)
  }

  return (
    <div className="flex bg-slate-50 font-sans h-screen overflow-hidden">
      <Sidebar setPageUser={handleChangePage} />

      <div className="flex-1 overflow-y-auto">
        {/* make MainPage always mounted */}
        <div className={page === 'scrapper' ? 'block' : 'hidden'}>
          <MainPage />
        </div>

        {page === 'project' && <ProjectPage />}
        {page === 'telegram-group' && <TelegramGroupPage />}
      </div>
    </div>
  )
}
