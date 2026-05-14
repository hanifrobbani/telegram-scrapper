import { useEffect, useState } from "react"
import Select from "./ui/SelectOption"
import { IconCategory } from "@tabler/icons-react"
import Input from "./ui/Input"
import Button from "./ui/Button"
import { IconRocket, IconFolderOpen, IconRefresh, IconBrandTelegram, IconMessage, IconChevronRightFilled } from "@tabler/icons-react"
import { useScrapMessageMutation } from "@/hooks/useScrapMessage"
import { DataScrapperType } from "@/types/scrap.type"
import LoadingBar from "./ui/loadingBar"
import { useGetTeleGroup } from "@/hooks/useTelegramGroup"
import { DataScrapperRespond } from "@/types/scrap.type"
import { truncateText } from "@/helper/truncateText"

type ScrapperItem = DataScrapperRespond['data'][0];

export default function MainPage() {
    const [tableScrapResult, setTableScrapResult] = useState<string>('newest')
    const handleChangeTableScrapResult = (data: string) => {
        setTableScrapResult(data)
    }
    const { mutate, error, isError, isPending, data } = useScrapMessageMutation()
    const { telegramGroupData, isTelegramGroupError, isTelegramGroupLoading } = useGetTeleGroup()
    const [formData, setFormData] = useState<DataScrapperType>({ channelUrl: '', startDate: '', endDate: '' })
    const [newProject, setNewProject] = useState<ScrapperItem[]>([])
    const [updatedProject, setUpdatedProject] = useState<ScrapperItem[]>([])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const seperateData = (data: ScrapperItem[]) => {
        const newProject = data.filter(item => item.replyToId === true);
        const updatedProject = data.filter(item => item.replyToId === false);

        setNewProject(newProject)
        setUpdatedProject(updatedProject)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutate(formData)
        console.log(data);
    }


    useEffect(() => {
        if (data && !isPending && !isError) {
            seperateData(data.data);
            console.log("new project: ", newProject);
            
        }
    }, [data, isPending, isError]);

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
                                    <option>Loading dulu...</option>
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
                    <div className="flex justify-between gap-10">
                        <div className="bg-blue-50 border border-slate-200 text-blue-600 p-5 rounded-xl shadow-md w-full flex justify-between gap-5 items-start">
                            <div className="flex justify-center">
                                <div className="bg-blue-200 rounded-xl p-3"><IconMessage size={30} />
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
                                    <IconFolderOpen size={30} />
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
                                    <IconRefresh size={30} stroke={2} />
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="text-sm font-semibold text-gray-800">Updated Project</p>
                                <h1 className="text-4xl font-semibold text-gray-800">141</h1>
                                <p className="inline py-1 px-1.5 rounded-md text-sm text-orange-600 bg-orange-200">Update</p>
                            </div>
                        </div>
                    </div>
                )}

                <section className="py-5">
                    <header className="p-2 flex justify-between">
                        <div className="">
                            <h1 className="text-xl font-semibold">Scrape Result</h1>
                            <p className="text-sm text-slate-500">Final scrape resutl & filter by new or updated project</p>
                        </div>
                        {isPending ? (
                            <div className=""></div>
                        ) : (
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
                        )}
                    </header>
                    <div className="flex gap-2 w-full flex-col">
                        {isPending ? (
                            <div className="flex justify-center items-center gap-1 w-full border border-slate-200 rounded-xl shadow bg-white p-10">
                                <div className="space-y-5">
                                    <div className="flex gap-4">
                                        <div className="p-4 bg-blue-200 rounded-full">
                                            <div className="text-blue-600">
                                                <IconBrandTelegram size={40} />
                                            </div>
                                        </div>
                                        <div className="max-w-md">
                                            <h1 className="font-semibold text-lg">Scrapping in Progress...</h1>
                                            <p className="text-slate-600 text-sm">Please wait while we collect the latest announcement from the selected Telegram Group</p>
                                        </div>
                                    </div>
                                    <LoadingBar label="Scraping" progress={50} />
                                </div>
                            </div>
                        ) : (
                            tableScrapResult == 'newest' ?
                                (
                                    <div className="flex flex-col gap-1 w-full border border-slate-200 rounded-xl shadow bg-white">
                                        <header className="flex justify-between py-4 px-2 items-center">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-green-200 p-2 rounded-full text-green-600">
                                                    <IconFolderOpen size={24} />
                                                </div>
                                                <div className="">
                                                    <h1 className="font-semibold">New Project</h1>
                                                    <p className="text-sm text-slate-600">All the newest project</p>
                                                </div>
                                            </div>
                                            <p className="text-slate-400 text-sm">90 items</p>
                                        </header>
                                        {Object.keys(newProject).length !== 0 ? (
                                            newProject.map((item, index) => (
                                                <div className="flex flex-col">
                                                    <li className="flex justify-between items-center border-b border-slate-400 p-3 hover:bg-gray-200 cursor-pointer transition-colors">
                                                        <div className="flex gap-4 items-start">
                                                            <div className="p-2 bg-gray-200 rounded-md">
                                                                <p className="text-slate-700 text-sm font-semibold">{index}</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="font-semibold">{item.projectName}</p>
                                                                <p className="text-slate-600 text-sm">{truncateText(item.text, 20)}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-gray-400">
                                                            <IconChevronRightFilled size={24} />
                                                        </div>
                                                    </li>
                                                </div>
                                            ))
                                        ) : (
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
                                                        <IconChevronRightFilled size={24} />
                                                    </div>
                                                </li>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-1 w-full border border-slate-200 rounded-xl shadow bg-white">
                                        <header className="flex justify-between py-4 px-2 items-center">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-orange-200 p-2 rounded-full text-orange-600">
                                                    <IconRefresh size={24} />
                                                </div>
                                                <div className="">
                                                    <h1 className="font-semibold">Updated Project</h1>
                                                    <p className="text-sm text-slate-600">All the updated project</p>
                                                </div>
                                            </div>
                                            <p className="text-slate-400 text-sm">90 items</p>
                                        </header>
                                        {Object.keys(updatedProject).length !== 0 ? (
                                            updatedProject.map((item, index) => (
                                                <div className="flex flex-col">
                                                    <li className="flex justify-between items-center border-b border-slate-400 p-3 hover:bg-gray-200 cursor-pointer transition-colors">
                                                        <div className="flex gap-4 items-start">
                                                            <div className="p-2 bg-gray-200 rounded-md">
                                                                <p className="text-slate-700 text-sm font-semibold">{index}</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="font-semibold">{item.projectName}</p>
                                                                <p className="text-slate-600 text-sm">{truncateText(item.text, 20)}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-gray-400">
                                                            <IconChevronRightFilled size={24} />
                                                        </div>
                                                    </li>
                                                </div>
                                            ))
                                        ) : (
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
                                                        <IconChevronRightFilled size={24} />
                                                    </div>
                                                </li>
                                            </div>
                                        )}
                                    </div>
                                )
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}