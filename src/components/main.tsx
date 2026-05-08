'use client'
import { useState } from "react"

export default function MainPage() {
    const [tableScrapResult, setTableScrapResult] = useState<string>('newest')

    const handleChangeTableScrapResult = (data: string) => {
        setTableScrapResult(data)
    }
    return (
        <div className="w-full p-5 space-y-4">
            <header className="p-2">
                <h1 className="text-xl font-semibold">Announcement</h1>
                <p className="text-sm text-slate-500">Scrape & filter project announcements</p>
            </header>

            <main className="w-full flex flex-col gap-5">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 space-y-4">
                    <div className="flex gap-2 items-center">
                        <div className="text-blue-600 bg-blue-200 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-filter"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227" /></svg>
                        </div>
                        <div className="">
                            <h1 className="font-bold">Filter & Scrape</h1>
                            <p className="text-slate-400 text-xs">Select the existing telegram group to start scrapping</p>
                        </div>
                    </div>
                    <form action="" className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">Telegram Group</label>
                            <select name="" id="" className="bg-white text-slate-600 rounded-md px-4 py-2 outline-none border-2 border-gray-300">
                                <option value="">nama</option>
                                <option value="">nama</option>
                                <option value="">nama</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">From Date</label>
                            <input type="date" className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 bg-white  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:cursor-pointer text-slate-600" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">To Date</label>
                            <input type="date" className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 bg-white text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:cursor-pointer" />
                        </div>

                        <div className="flex items-end">
                            <button className="rounded-md border bg-blue-600 py-2 px-6 cursor-pointer text-white flex gap-1 hover:bg-blue-500 transition-colors text-sm items-center font-semibold">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-rocket"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                                </div>
                                <p>Scrape</p>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex justify-between gap-10">
                    <div className="bg-blue-50 border border-slate-200 text-blue-600 p-5 rounded-xl shadow-md w-full flex justify-between gap-5 items-start">
                        <div className="flex justify-center">
                            <div className="bg-blue-200 rounded-xl p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message-2">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M8 9h8" />
                                    <path d="M8 13h6" />
                                    <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm font-semibold">Total Message</p>
                            <h1 className="text-4xl font-semibold text-gray-800">141</h1>
                            <p className="text-slate-600 text-sm">Last scrape: 12 Mei 2026</p>
                        </div>
                    </div>
                    <div className="bg-green-50 text-green-600 border border-slate-200 shadow-md p-5 rounded-xl w-full flex justify-between gap-5 items-start">
                        <div className="flex justify-center">
                            <div className="bg-green-200 rounded-xl p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-folder-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm font-semibold text-gray-800">New Project</p>
                            <h1 className="text-4xl font-semibold text-gray-800">52</h1>
                            <p className="inline py-1 px-1.5 rounded-md text-sm text-green-600 bg-green-200">New</p>
                        </div>
                    </div>
                    <div className="bg-orange-50 text-orange-600 border border-slate-200 p-5 rounded-md shadow-md w-full flex justify-between gap-5 items-start">
                        <div className="flex justify-center">
                            <div className="bg-orange-200 rounded-xl p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-refresh"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm font-semibold text-gray-800">Updated Project</p>
                            <h1 className="text-4xl font-semibold text-gray-800">141</h1>
                            <p className="inline py-1 px-1.5 rounded-md text-sm text-orange-600 bg-orange-200">Update</p>
                        </div>
                    </div>
                </div>

                <section className="py-5">
                    <header className="p-2 flex justify-between">
                        <div className="">
                            <h1 className="text-xl font-semibold">Scrape Result</h1>
                            <p className="text-sm text-slate-500">Final scrape resutl & filter by new or updated project</p>
                        </div>
                        <div className="flex items-center bg-gray-200 p-1 rounded-xl w-fit">
                            <button onClick={() => handleChangeTableScrapResult('newest')}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${tableScrapResult === 'newest'
                                        ? 'bg-white shadow text-blue-600 font-semibold' : 'text-slate-500 hover:text-slate-700'}`}>
                                Newest
                            </button>

                            <button onClick={() => handleChangeTableScrapResult('updated')}
                                className={` px-4 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${tableScrapResult === 'updated'
                                        ? 'bg-white shadow text-blue-600 font-semibold'
                                        : 'text-slate-500 hover:text-slate-700'}`}>
                                Updated
                            </button>
                        </div>
                    </header>
                    <div className="flex gap-2 w-full flex-col">
                        {tableScrapResult == 'newest' ?
                            (
                                <div className="flex flex-col gap-1 w-full border border-slate-200 rounded-xl shadow bg-white">
                                    <header className="flex justify-between py-4 px-2 items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-green-200 p-2 rounded-full text-green-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>
                                            </div>
                                            <div className="">
                                                <h1 className="font-semibold">New Project</h1>
                                                <p className="text-sm text-slate-600">All the newest project</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-sm">90 items</p>
                                    </header>
                                    <div className="flex flex-col">
                                        <li className="flex justify-between items-center border-b border-slate-400 p-3 hover:bg-gray-200 cursor-pointer transition-colors">
                                            <div className="flex gap-4 items-start">
                                                <div className="p-2 bg-gray-200 rounded-md">
                                                    <p className="text-slate-700 text-sm font-semibold">1</p>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="font-semibold">New project</p>
                                                    <p className="text-slate-600 text-sm">Description about the project</p>
                                                </div>
                                            </div>
                                            <div className="text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-1 w-full border border-slate-200 rounded-xl shadow bg-white">
                                    <header className="flex justify-between py-4 px-2 items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-orange-200 p-2 rounded-full text-orange-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-rotate-clockwise"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" /></svg>
                                            </div>
                                            <div className="">
                                                <h1 className="font-semibold">Updated Project</h1>
                                                <p className="text-sm text-slate-600">All the updated project</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-sm">90 items</p>
                                    </header>
                                    <div className="flex flex-col">
                                        <li className="flex justify-between items-center border-b border-slate-400 p-3 hover:bg-gray-200 cursor-pointer transition-colors">
                                            <div className="flex gap-4 items-start">
                                                <div className="p-2 bg-gray-200 rounded-md">
                                                    <p className="text-slate-700 text-sm font-semibold">1</p>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="font-semibold">New project</p>
                                                    <p className="text-slate-600 text-sm">Description about the project</p>
                                                </div>
                                            </div>
                                            <div className="text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </section>
            </main>
        </div>
    )
}