'use client'
import MainPage from "@/components/main";
import Sidebar from "@/components/sidebar";
import { useState, useEffect } from "react";
import ProjectPage from "@/components/section/Projects";
import TelegramGroupPage from "@/components/section/TelegramGroup";

export default function Home() {
  const [page, setPage] = useState<string>('scrapper')

  const handleChangePage = (data: string) => {
    setPage(data)
  }

  return (
    <div className="flex bg-slate-50 font-sans h-screen overflow-hidden">
      <Sidebar setPageUser={handleChangePage} />

      <div className="flex-1 overflow-y-auto">
        {page == 'scrapper' ? (
        <MainPage />
      ) : page == 'project' ? (
        <ProjectPage />
      ) : (<TelegramGroupPage />)}
      </div>
    </div>
  );
}
