import Select from "../../ui/SelectOption"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import { IconFolderFilled, IconSparklesFilled, IconSpeakerphone, IconMessage, IconClock, IconCopy, IconBrandTelegram } from "@tabler/icons-react"

export default function AISearchPage() {
    return (
        <div className="w-full">
            <main className="w-full flex flex-col gap-5">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 space-y-4">
                    <form className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">Project</label>
                            <Select icon={<IconFolderFilled size={18} />} name="project">
                                <option value="">test</option>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">Select Group</label>
                            <Select icon={<IconSpeakerphone size={20} />} name="channelUrl">
                                <option value="">test</option>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">Date Range</label>
                            <div className="flex gap-2 border border-slate-600 rounded-md">
                                <Input
                                    type="date"
                                    name="endDate"
                                    className="border-none [*::-webkit-calendar-picker-indicator]:opacity-0"
                                // value={formData.endDate}
                                />
                                <Input
                                    type="date"
                                    name="startDate"
                                    className="border-none [*::-webkit-calendar-picker-indicator]:opacity-0"
                                // value={formData.startDate}
                                />
                            </div>
                        </div>

                        <div className="w-full flex items-end">
                            <Button
                                type="submit"
                                label="Start Smart Search"
                                variant="primary"
                                size="normal"
                                icon={<IconSparklesFilled size={22} />}
                                // loadingType={isPending}
                                className="w-full text-center"
                            />
                        </div>
                    </form>
                </div>

                <div className="flex justify-between gap-5">
                    <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex gap-4 items-center">
                        <div className="">
                            <div className="bg-blue-100 text-blue-600 rounded-xl p-3">
                                <IconMessage size={30} />
                            </div>
                        </div>
                        <div className="">
                            <h1 className="font-semibold">Total Message</h1>
                            <p className="text-sm text-slate-500"><span className="font-semibold text-3xl text-slate-800">24</span> messages found</p>
                        </div>
                    </div>
                    <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex gap-4">
                        <div className="">
                            <div className="bg-green-100 text-green-600 rounded-xl p-3">
                                <IconSpeakerphone size={30} />
                            </div>
                        </div>
                        <div className="">
                            <h1 className="font-semibold">Source</h1>
                            <p className="text-sm text-slate-500"><span className="font-semibold text-3xl text-slate-800">5</span> group</p>
                        </div>
                    </div>
                    <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex gap-4">
                        <div className="">
                            <div className="bg-purple-100 text-purple-600 rounded-xl p-3">
                                <IconClock size={30} />
                            </div>
                        </div>
                        <div className="">
                            <h1 className="font-semibold">Search Duration</h1>
                            <p className="text-sm text-slate-500"><span className="font-semibold text-3xl text-slate-800">12</span> minutes</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between gap-5">
                    <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-2">
                        <header className="flex w-full justify-between p-2">
                            <div className="">
                                <h1 className="text-lg font-semibold">AI Summary</h1>
                            </div>
                            <div className="">
                                <Button
                                    label="Copy"
                                    variant="secondary"
                                    icon={<IconCopy size={16} />}
                                />
                            </div>
                        </header>

                        <div className="px-2 space-y-5 mt-1">
                            <div className="w-full">
                                <div className="bg-blue-100 border-l-4 border-blue-600 rounded-md p-4">
                                    <h1 className="font-semibold text-blue-600">Project Overview</h1>
                                    <p className="text-slate-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo optio qui facilis totam tenetur rerum, recusandae sed doloribus. Ea eius nulla, aperiam perspiciatis expedita dolores! Ut porro rerum et a.</p>
                                </div>
                            </div>

                            <div className="w-full">
                                <h1 className="font-semibold text-sm">Key Update:</h1>
                                <ul className="list-disc text-slate-700 px-4">
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, earum.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, earum.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, earum.</li>
                                </ul>
                            </div>
                            <div className="w-full">
                                <h1 className="font-semibold text-sm">More Info:</h1>
                                <p className="text-slate-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, alias tenetur! Quidem odio voluptates quam cupiditate accusamus corporis? Quis praesentium fuga laudantium iure reprehenderit placeat iste, exercitationem unde doloribus. Esse, quibusdam, eveniet veritatis consequatur recusandae sequi placeat illo fugiat quidem obcaecati dignissimos vel pariatur veniam modi hic, architecto dolores quod!</p>
                            </div>
                            <div className="w-full flex justify-center">
                                <p className="text-slate-600 border rounded-md px-4 py-2">load more</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-2">
                        <header className="flex w-full justify-between p-2">
                            <div className="">
                                <h1 className="text-lg font-semibold">Related Messages</h1>
                                <p className="text-sm text-slate-600">23 messages</p>
                            </div>
                        </header>

                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between hover:bg-gray-100 cursor-pointer px-4 py-2">
                                <div className="flex gap-2">
                                    <div className="">
                                        <div className="bg-blue-200 text-blue-600 p-2 rounded-md">
                                            <IconBrandTelegram size={18} />
                                        </div>
                                    </div>
                                    <div className="text-sm">
                                        <h1 className="font-semibold">lorem ipsum title</h1>
                                        <p className="text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 text-right">
                                    <p>14/05/2026</p>
                                    <p>10.30</p>
                                </div>
                            </div>
                            <div className="flex justify-between hover:bg-gray-100 cursor-pointer px-4 py-2">
                                <div className="flex gap-2">
                                    <div className="">
                                        <div className="bg-blue-200 text-blue-600 p-2 rounded-md">
                                            <IconBrandTelegram size={18} />
                                        </div>
                                    </div>
                                    <div className="text-sm">
                                        <h1 className="font-semibold">lorem ipsum title</h1>
                                        <p className="text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 text-right">
                                    <p>14/05/2026</p>
                                    <p>10.30</p>
                                </div>
                            </div>
                            <div className="flex justify-between hover:bg-gray-100 cursor-pointer px-4 py-2">
                                <div className="flex gap-2">
                                    <div className="">
                                        <div className="bg-blue-200 text-blue-600 p-2 rounded-md">
                                            <IconBrandTelegram size={18} />
                                        </div>
                                    </div>
                                    <div className="text-sm">
                                        <h1 className="font-semibold">lorem ipsum title</h1>
                                        <p className="text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 text-right">
                                    <p>14/05/2026</p>
                                    <p>10.30</p>
                                </div>
                            </div>
                            <div className="flex justify-between hover:bg-gray-100 cursor-pointer px-4 py-2">
                                <div className="flex gap-2">
                                    <div className="">
                                        <div className="bg-blue-200 text-blue-600 p-2 rounded-md">
                                            <IconBrandTelegram size={18} />
                                        </div>
                                    </div>
                                    <div className="text-sm">
                                        <h1 className="font-semibold">lorem ipsum title</h1>
                                        <p className="text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 text-right">
                                    <p>14/05/2026</p>
                                    <p>10.30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}