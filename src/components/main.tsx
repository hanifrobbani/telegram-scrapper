import { useEffect, useState } from "react"
import Select from "./ui/SelectOption"
import { IconCategory, IconLink } from "@tabler/icons-react"
import Input from "./ui/Input"
import Button from "./ui/Button"
import { IconRocket, IconFolderOpen, IconRefresh, IconBrandTelegram, IconMessage, IconChevronRightFilled, IconFolder, IconFileDescription, IconCalendarEvent, IconTag, IconFolderOff, IconRefreshOff } from "@tabler/icons-react"
import { useScrapMessageMutation } from "@/hooks/useScrapMessage"
import { DataScrapperType } from "@/types/scrap.type"
import LoadingBar from "./ui/loadingBar"
import { useGetTeleGroup } from "@/hooks/useTelegramGroup"
import { DataScrapperRespond } from "@/types/scrap.type"
import { truncateText } from "@/helper/formatText"
import Image from "next/image"
import Modal from "./ui/modalDialog"
import { formatDate, formatDateWIB } from "@/helper/formatDate"
import Toaster from '@/components/ui/modalToaster'
import { useFakeProgress } from "@/helper/fakeProgress"

type ScrapperItem = DataScrapperRespond['data'][0];

export default function MainPage() {
    const [tableScrapResult, setTableScrapResult] = useState<string>('newest')
    const handleChangeTableScrapResult = (data: string) => {
        setTableScrapResult(data)
    }
    const { mutate, error, isError, isPending, data, toaster, setToaster } = useScrapMessageMutation()
    const { telegramGroupData, isTelegramGroupError, isTelegramGroupLoading } = useGetTeleGroup()
    useEffect(() => {
        if (telegramGroupData && telegramGroupData.length > 0) {
            setFormData(prev => ({
                ...prev,
                channelUrl: prev.channelUrl || telegramGroupData[0].url_group
            }))
        }
    }, [telegramGroupData])

    const [formData, setFormData] = useState<DataScrapperType>({ channelUrl: '', startDate: '', endDate: '' })
    const [newProject, setNewProject] = useState<ScrapperItem[]>([])
    const [updatedProject, setUpdatedProject] = useState<ScrapperItem[]>([])
    const [modal, setModal] = useState<boolean>(false)
    const [modalData, setModaldata] = useState<ScrapperItem | null>(null)
    const [buttonCopy, setButtonCopy] = useState<string>("Copy Link")
    const loadingBarProgress = useFakeProgress(isPending)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const seperateData = (data: ScrapperItem[]) => {
        const newProject = data.filter(item => item.type === "new");
        const updatedProject = data.filter(item => item.type === "update");

        setNewProject(newProject)
        setUpdatedProject(updatedProject)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutate(formData)
    }
    useEffect(() => {
        if (data && !isPending && !isError) {
            seperateData(data.data);
        }
    }, [data, isPending, isError]);

    const handleModalOpen = (modalData: ScrapperItem) => {
        setModal(true)
        setModaldata(modalData)
    }

    const handleCopyLink = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);

            setButtonCopy("Link Copied!")
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() =>{
        if(!modal){
            setButtonCopy("Copy Link")
        }
    }, [modal])

    const hasSourceData = Object.keys(data?.data || {}).length >= 2;
    const newProjectEmpty = Object.keys(newProject).length < 1;
    const updatedProjectEmpty = Object.keys(updatedProject).length < 1;
    const currentItems = tableScrapResult === 'newest' ? newProject : updatedProject;
    const isCurrentEmpty = tableScrapResult === 'newest' ? newProjectEmpty : updatedProjectEmpty;

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
                    <form onSubmit={handleSubmit} className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">Telegram Group</label>
                            <Select icon={<IconCategory size={16} />} name="channelUrl" onChange={handleChange}>
                                {isTelegramGroupLoading ? (
                                    <option>Loading data...</option>
                                ) : isTelegramGroupError ? (
                                    <option>error</option>
                                ) : (
                                    <>
                                        {telegramGroupData?.map((item, index) => (
                                            <option value={item.url_group} key={index}>{item.title}</option>
                                        ))}
                                    </>
                                )}
                            </Select>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">From Date</label>
                            <Input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">To Date</label>
                            <Input
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex items-end">
                            <Button
                                type="submit"
                                label="Scrap"
                                variant="primary"
                                icon={<IconRocket size={24} />}
                                loadingType={isPending}
                            />
                        </div>
                    </form>
                </div>

                {isPending ? (
                    <div className="flex justify-between gap-5">
                        <div className="bg-blue-50 border border-slate-200 text-blue-600 p-5 rounded-xl shadow-md w-full flex justify-between gap-5 items-start">
                            <div className="flex justify-center">
                                <div className="bg-blue-200 rounded-xl p-3">
                                    <IconMessage size={30} />
                                </div>
                            </div>
                            <div className="w-full space-y-7">
                                <p className="text-sm font-semibold text-blue-600">Total Message</p>
                                <div className="flex gap-3">
                                    <div className="border-2 border-slate-400 w-6 animate-pulse" />
                                    <div className="border-2 border-slate-400 w-6 animate-pulse" />
                                    <div className="border-2 border-slate-400 w-6 animate-pulse" />
                                </div>
                            </div>
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-400 border-t-transparent"></div>
                            </div>
                        </div>
                        <div className="bg-green-50 border border-slate-200 text-green-600 p-5 rounded-xl shadow-md w-full flex justify-between gap-5 items-start">
                            <div className="flex justify-center">
                                <div className="bg-green-200 rounded-xl p-3">
                                    <IconFolderOpen size={30} />
                                </div>
                            </div>
                            <div className="w-full space-y-7">
                                <p className="text-sm font-semibold text-green-600">New Project</p>
                                <div className="flex gap-3">
                                    <div className="border-2 border-slate-400 w-6 animate-pulse" />
                                    <div className="border-2 border-slate-400 w-6 animate-pulse" />
                                    <div className="border-2 border-slate-400 w-6 animate-pulse" />
                                </div>
                            </div>
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-400 border-t-transparent"></div>
                            </div>
                        </div>
                        <div className="bg-orange-50 border border-slate-200 text-orange-600 p-5 rounded-xl shadow-md w-full flex justify-between gap-5 items-start">
                            <div className="flex justify-center">
                                <div className="bg-orange-200 rounded-xl p-3">
                                    <IconRefresh size={30} stroke={2} />
                                </div>
                            </div>
                            <div className="w-full space-y-7">
                                <p className="text-sm font-semibold text-orange-600">Update Project</p>
                                <div className="flex gap-3">
                                    <div className="border-2 border-slate-400 w-6 animate-pulse" />
                                    <div className="border-2 border-slate-400 w-6 animate-pulse" />
                                    <div className="border-2 border-slate-400 w-6 animate-pulse" />
                                </div>
                            </div>
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange-400 border-t-transparent"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-between gap-5">
                        <div className="bg-blue-50 border border-slate-200 text-blue-600 p-5 rounded-xl shadow-md w-full flex justify-between gap-5 items-start">
                            <div className="flex justify-center">
                                <div className="bg-blue-200 rounded-xl p-3"><IconMessage size={30} />
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="text-sm font-semibold">Total Message</p>
                                <h1 className="text-4xl font-semibold text-gray-800">{Object.keys(data?.data || "0").length < 2 ? "0" : Object.keys(data?.data || "0").length}</h1>
                                {/* <p className="text-slate-600 text-sm">Last scrape: 12 Mei 2026</p> */}
                            </div>
                        </div>
                        <div className="bg-green-50 text-green-600 border border-slate-200 shadow-md p-5 rounded-xl w-full flex justify-between gap-5 items-start">
                            <div className="flex justify-center">
                                <div className="bg-green-200 rounded-xl p-3">
                                    <IconFolderOpen size={30} />
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="text-sm font-semibold text-gray-800">New Project</p>
                                <h1 className="text-4xl font-semibold text-gray-800">{Object.keys(newProject).length}</h1>
                                <p className="inline py-1 px-1.5 rounded-md text-sm text-green-600 bg-green-200">New</p>
                            </div>
                        </div>
                        <div className="bg-orange-50 text-orange-600 border border-slate-200 p-5 rounded-md shadow-md w-full flex justify-between gap-5 items-start">
                            <div className="flex justify-center">
                                <div className="bg-orange-200 rounded-xl p-3">
                                    <IconRefresh size={30} stroke={2} />
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="text-sm font-semibold text-gray-800">Updated Project</p>
                                <h1 className="text-4xl font-semibold text-gray-800">{Object.keys(updatedProject).length}</h1>
                                <p className="inline py-1 px-1.5 rounded-md text-sm text-orange-600 bg-orange-200">Update</p>
                            </div>
                        </div>
                    </div>
                )}

                <section className="py-5">
                    <header className="p-2 flex justify-between items-start mb-3">
                        <div>
                            <h1 className="text-xl font-semibold">Scrape Result</h1>
                            <p className="text-sm text-slate-500">Final scrape result & filter by new or updated project</p>
                        </div>

                        {hasSourceData && !isPending && (
                            <div className="flex items-center bg-gray-200 p-1 rounded-xl w-fit">
                                <button
                                    onClick={() => handleChangeTableScrapResult('newest')}
                                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${tableScrapResult === 'newest'
                                            ? 'bg-white shadow text-blue-600 font-semibold'
                                            : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                >
                                    Newest
                                </button>
                                <button
                                    onClick={() => handleChangeTableScrapResult('updated')}
                                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${tableScrapResult === 'updated'
                                            ? 'bg-white shadow text-blue-600 font-semibold'
                                            : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                >
                                    Updated
                                </button>
                            </div>
                        )}
                    </header>

                    <div className="w-full border border-slate-200 rounded-xl shadow bg-white">
                        {isPending ? (
                            <div className="flex justify-center items-center p-10">
                                <div className="space-y-5">
                                    <div className="flex gap-4">
                                        <div className="p-4 bg-blue-200 rounded-full text-blue-600">
                                            <IconBrandTelegram size={40} />
                                        </div>
                                        <div className="max-w-md">
                                            <h1 className="font-semibold text-lg">Scrapping in Progress...</h1>
                                            <p className="text-slate-600 text-sm">
                                                Please wait while we collect the latest announcements from the selected Telegram group.
                                            </p>
                                        </div>
                                    </div>
                                    <LoadingBar label="Scraping" progress={loadingBarProgress} />
                                </div>
                            </div>
                        ) : !hasSourceData ? (
                            // default ui when user not scrapping data
                            <div className="flex flex-col justify-center items-center p-10 gap-3">
                                <Image src="/telegram-box.png" width={200} height={200} alt="box telegram" />
                                <div className="text-center max-w-sm">
                                    <h1 className="text-lg font-semibold">No Scraping Results Yet!</h1>
                                    <p className="text-sm text-slate-600">
                                        Select a Telegram group, choose a time period, and click scrape to get started.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            // ── scrapping done, reveal tab toogle 
                            <>
                                <header className="flex items-center gap-2 py-4 px-4 border-b border-slate-200">
                                    <div className={`p-2 rounded-full ${tableScrapResult === 'newest'
                                            ? 'bg-green-200 text-green-600'
                                            : 'bg-orange-200 text-orange-600'
                                        }`}>
                                        {tableScrapResult === 'newest'
                                            ? <IconFolderOpen size={24} />
                                            : <IconRefresh size={24} />
                                        }
                                    </div>
                                    <div>
                                        <h1 className="font-semibold">
                                            {tableScrapResult === 'newest' ? 'New Project' : 'Updated Project'}
                                        </h1>
                                        <p className="text-sm text-slate-600">
                                            {tableScrapResult === 'newest' ? 'All the newest projects' : 'All the updated projects'}
                                        </p>
                                    </div>
                                </header>

                                {isCurrentEmpty ? (
                                    // Scrape finish but data is empty
                                    <div className="flex flex-col justify-center items-center p-10 gap-3">
                                        {tableScrapResult === 'newest'
                                            ? <IconFolderOff size={40} className="text-slate-400" />
                                            : <IconRefreshOff size={40} className="text-slate-400" />
                                        }
                                        <div className="text-center max-w-sm">
                                            <h1 className="text-lg font-semibold">
                                                No {tableScrapResult === 'newest' ? 'New' : 'Updated'} Projects Found
                                            </h1>
                                            <p className="text-sm text-slate-600">
                                                The scrape completed, but no {tableScrapResult === 'newest' ? 'new' : 'updated'} projects
                                                were found in the selected time period.
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <ul>
                                        {currentItems.map((item, index) => (
                                            // all data found & complete
                                            <li
                                                key={index}
                                                onClick={() => handleModalOpen(item)}
                                                className="flex justify-between items-center border-b border-slate-200 last:border-b-0 p-3 hover:bg-gray-100 cursor-pointer transition-colors"
                                            >
                                                <div className="flex gap-4 items-start">
                                                    <div className="p-2 bg-gray-100 rounded-md">
                                                        <p className="text-slate-700 text-sm font-semibold">{index + 1}</p>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">{truncateText(item.projectName, 80)}</p>
                                                        <p className="text-slate-600 text-sm">{truncateText(item.text, 50)}</p>
                                                    </div>
                                                </div>
                                                <IconChevronRightFilled size={24} className="text-gray-400 shrink-0" />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </main>
            <Modal isOpen={modal} onClose={() => setModal(false)} size="large" title="Detail Message" description="Detail information about the project" iconColor="blue" icon={<IconMessage size={30} />}>
                <div className="flex flex-col px-4 pb-4 pt-2 min-h-96 h-full justify-between gap-2">
                    <div className="w-full flex flex-1 justify-between">
                        <div className="w-full flex flex-col gap-5 max-w-80">
                            <div className="flex gap-4">
                                <div className="flex justify-center">
                                    <div className="bg-purple-200 text-purple-600 rounded-xl p-2">
                                        <IconFolder size={24} />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="font-semibold text-sm">Project Name</h1>
                                    <p className="text-slate-600 text-sm">{truncateText(modalData?.projectName || "", 30)}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex justify-center">
                                    <div className="bg-green-200 text-green-600 rounded-xl p-2">
                                        <IconCalendarEvent size={24} />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="font-semibold text-sm">Date</h1>
                                    <p className="text-slate-600 text-sm">
                                        {modalData && formatDateWIB(formatDate(modalData.date))}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex justify-center">
                                    <div className="bg-orange-200 text-orange-600 rounded-xl p-2">
                                        <IconTag size={24} />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="font-semibold text-sm">Type</h1>
                                    <p className="text-slate-600 text-sm">{modalData?.type}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex justify-center">
                                    <div className="bg-blue-200 text-blue-600 rounded-xl p-2">
                                        <IconLink size={24} />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="font-semibold text-sm">Message URL</h1>
                                    <a href={modalData?.messageUrl} target="_blank" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition-colors max-w-full truncate group hover:underline underline-offset-2">
                                        <span className="truncate">{modalData?.messageUrl}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5a1 1 0 0 1 0 2h-6a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-6a1 1 0 0 1 2 0v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm3 -2h5l.075 .003l.126 .017l.111 .03l.111 .044l.098 .052l.096 .067l.09 .08q .054 .053 .097 .112l.071 .11l.054 .114l.035 .105l.03 .148l.006 .118v5a1 1 0 0 1 -2 0v-2.586l-7.293 7.293a1 1 0 0 1 -1.414 -1.414l7.291 -7.293h-2.584a1 1 0 0 1 0 -2" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="flex gap-1">
                                <div className="text-blue-600">
                                    <IconFileDescription size={24} />
                                </div>
                                <h1 className="text-sm font-semibold">Text Message</h1>
                            </div>
                            <div className="flex-1 max-h-96 w-full text-slate-800 bg-blue-50 border border-slate-400 text-sm rounded-md p-3 overflow-y-scroll overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden whitespace-pre-line break-all">
                                {modalData?.text}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse gap-2 mt-3">
                        <Button
                            label="Close"
                            variant="primary"
                            onClick={() => setModal(false)}
                        />
                        <Button
                            label={buttonCopy}
                            variant="secondary"
                            icon={<IconLink size={16} />}
                            onClick={() => handleCopyLink(modalData?.messageUrl as string)}
                        />
                    </div>
                </div>
            </Modal>

            <Toaster
                type={toaster.type}
                message={toaster.message}
                isOpen={toaster.isOpen}
                onClose={() => setToaster(prev => ({ ...prev, isOpen: false }))}
                autoClose={true}
                duration={3000}
            />

        </div>
    )
}