import { useGetProject } from "@/hooks/useProject"

export default function ProjectPage() {
    const { data, error, isLoading } = useGetProject()

    return (
        <div className="w-full p-5 space-y-4">
            <header className="p-2">
                <h1 className="text-xl font-semibold">List Project</h1>
                <p className="text-sm text-slate-500">Add or update the existing crypto project</p>
            </header>

            <main className="w-full space-y-4">
                <div className="w-full border border-slate-200 rounded-xl shadow overflow-hidden">

                    <div className="flex items-center justify-between bg-white px-4 py-3 border-b border-slate-200">
                        <div className="relative">
                            <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                            <input
                                type="text"
                                placeholder="Search projects…"
                                className="pl-8 pr-3 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-600 placeholder:text-slate-400 outline-none focus:border-blue-400 focus:bg-white transition-colors w-56"
                            />
                        </div>
                        <button className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 transition-colors text-white text-xs font-medium px-3 py-1.5 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                            Add new project
                        </button>
                    </div>
                    <div className="grid grid-cols-[48px_1fr_2fr_80px] px-4 py-2 bg-slate-100 border-b border-slate-200">
                        <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">No</div>
                        <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Project name</div>
                        <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">URL</div>
                        <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Actions</div>
                    </div>

                    <div className="flex flex-col">
                        {isLoading ? (
                            <div className="grid grid-cols-[60px_1fr_700px_40px] bg-white shadow-md items-start px-3 py-3 border-b border-slate-200 hover:bg-gray-50 transition-colors">
                                <div>
                                    <div className="p-2 animate-pulse w-full flex items-center">
                                        <div className=" bg-gray-300 w-6 h-6 rounded-xl"></div>
                                    </div>
                                </div>

                                <div className="animate-pulse space-y-1">
                                    <div className="w-full rounded-xl h-4 bg-gray-300"></div>
                                    <div className="w-1/2 rounded-xl h-4 bg-gray-300"></div>
                                </div>
                                <div className="pl-4 animate-pulse">
                                    <div className="w-1/2 rounded-xl h-4 bg-gray-300"></div>
                                </div>

                                <div className="animate-pulse">
                                    <div className="w-full rounded-md h-10 bg-gray-300"></div>
                                </div>
                            </div>
                        ) : error ? (
                            <div className="grid grid-cols-[60px_1fr_40px] bg-white items-start px-3 py-3 border-b border-slate-200 hover:bg-gray-50 transition-colors">
                                <div>
                                    <div className="p-2 bg-gray-200 rounded-md text-sm font-semibold w-fit">
                                        1
                                    </div>
                                </div>

                                <div>
                                    <p className="font-semibold">ada error bos</p>
                                    <p className="text-slate-600 text-sm">
                                        Error
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold">ada error bos</p>
                                </div>

                                <button className="text-gray-400 flex items-center justify-center cursor-pointer hover:text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1 -1v-1a1 1 0 0 1 2 0v1a3 3 0 0 1 -3 3h-9a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h1a1 1 0 0 1 1 1" /><path d="M14.596 5.011l4.392 4.392l-6.28 6.303a1 1 0 0 1 -.708 .294h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 .294 -.708zm6.496 -2.103a3.097 3.097 0 0 1 .165 4.203l-.164 .18l-.693 .694l-4.387 -4.387l.695 -.69a3.1 3.1 0 0 1 4.384 0" /></svg>
                                </button>
                            </div>
                        ) : (
                            data?.map((item, index) => (
                                <div key={index} className="grid grid-cols-[48px_1fr_2fr_80px] bg-white items-start px-3 py-3 border-b border-slate-200 hover:bg-gray-50 transition-colors">
                                    <div className="text-sm font-medium text-slate-600">{index + 1}</div>

                                    <div className="flex flex-col">
                                        <p className="text-sm font-semibold text-slate-800 uppercase">{item.project_name}</p>
                                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full w-fit">
                                            {item.type}
                                        </span>
                                    </div>
                                    <div className="pr-4">
                                        <a href={item.url_project} target="_blank" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition-colors max-w-full truncate group hover:underline underline-offset-2">
                                            <span className="truncate">{item.url_project}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5a1 1 0 0 1 0 2h-6a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-6a1 1 0 0 1 2 0v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm3 -2h5l.075 .003l.126 .017l.111 .03l.111 .044l.098 .052l.096 .067l.09 .08q .054 .053 .097 .112l.071 .11l.054 .114l.035 .105l.03 .148l.006 .118v5a1 1 0 0 1 -2 0v-2.586l-7.293 7.293a1 1 0 0 1 -1.414 -1.414l7.291 -7.293h-2.584a1 1 0 0 1 0 -2" /></svg>
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <button className="p-2 rounded-md border border-red-200 bg-red-50 text-red-500 hover:bg-red-100 hover:border-red-300 transition-colors cursor-pointer"
                                        aria-label="Delete">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                                        </button>
                                        <button className="p-2 rounded-md border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:border-slate-300 transition-colors cursor-pointer"
                                            aria-label="Edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1 -1v-1a1 1 0 0 1 2 0v1a3 3 0 0 1 -3 3h-9a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h1a1 1 0 0 1 1 1" /><path d="M14.596 5.011l4.392 4.392l-6.28 6.303a1 1 0 0 1 -.708 .294h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 .294 -.708zm6.496 -2.103a3.097 3.097 0 0 1 .165 4.203l-.164 .18l-.693 .694l-4.387 -4.387l.695 -.69a3.1 3.1 0 0 1 4.384 0" /></svg>
                                        </button>
                                    </div>

                                </div>
                            ))
                        )}

                    </div>
                </div>
            </main>
        </div>
    )
}