import { useEffect, useState } from "react"
import Select from "../../ui/SelectOption"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import { IconCategory, IconSparklesFilled, IconCopy, IconDownload, IconSparkles2, IconMoodSad, IconMoodHappy, IconMoodEmpty, IconSearch, IconBrandTelegram } from "@tabler/icons-react"

export default function AISummarizePage() {
    return (
        <div className="w-full">
            <main className="w-full flex flex-col gap-5">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 space-y-4">
                    <form className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">Telegram Group</label>
                            <Select icon={<IconCategory size={16} />} name="channelUrl">
                                <option value="">test</option>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">From Date</label>
                            <Input
                                type="date"
                                name="startDate"
                            // value={formData.startDate}
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">To Date</label>
                            <Input
                                type="date"
                                name="endDate"
                            // value={formData.endDate}
                            />
                        </div>

                        <div className="w-full flex items-end">
                            <Button
                                type="submit"
                                label="Generate Summary"
                                variant="primary"
                                size="normal"
                                icon={<IconSparklesFilled size={22} />}
                                // loadingType={isPending}
                                className="w-full text-center"
                            />
                        </div>
                    </form>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex">
                    <div className="min-w-60 border-r border-slate-200 p-5">
                        <header className="flex flex-col">
                            <h1 className="font-semibold">Source Messages</h1>
                            <p className="text-slate-600 text-xs">Total 121 message</p>

                            <div className="my-3">
                                <Input
                                    name="search_message"
                                    type="text"
                                    placeholder="Search..."
                                    icon={<IconSearch size={18} />}
                                    size="small"
                                />
                            </div>
                        </header>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between hover:bg-gray-50 cursor-pointer">
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
                            <div className="flex justify-between hover:bg-gray-50 cursor-pointer">
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
                            <div className="flex justify-between hover:bg-gray-50 cursor-pointer">
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
                            <div className="flex justify-between hover:bg-gray-50 cursor-pointer">
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
                    <div className="w-full p-5">
                        <header className="flex justify-between mb-2">
                            <h1 className="font-semibold">AI Summary</h1>
                            <div className="flex gap-4">
                                <Button
                                    label="Copy"
                                    variant="secondary"
                                    icon={<IconCopy size={16} />}
                                />
                                <Button
                                    label="Download"
                                    variant="secondary"
                                    icon={<IconDownload size={16} />}
                                />
                            </div>
                        </header>

                        <div className="border border-slate-200 rounded-md py-3 px-4 space-y-5">
                            <div className="flex gap-2">
                                <div className="">
                                    <div className="bg-blue-200 text-blue-600 rounded-full p-2">
                                        <IconSparkles2 size={24} />
                                    </div>
                                </div>

                                <div className="">
                                    <h1 className="font-semibold">Executive Summary.</h1>
                                    <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae, aut iste sint libero a ducimus? Vel error quis iste, velit labore sequi cum sint a repellat hic eum provident ab unde rem. Voluptatibus esse dolorum natus. Neque nobis eos eveniet! Quos vel recusandae at eius nam. Facere, veniam nulla?
                                    </p>
                                </div>

                            </div>
                            <div className="">
                                <h1 className="font-semibold text-sm">Key Highlight:</h1>
                                <ul className="text-sm list-disc text-slate-600 px-4">
                                    <li><span className="font-semibold">Lorem ipsum</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, earum.</li>
                                    <li><span className="font-semibold">Lorem ipsum</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, earum.</li>
                                    <li><span className="font-semibold">Lorem ipsum</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, earum.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex w-full mt-5 gap-2">
                            <div className="w-full border border-slate-200 rounded-md py-3 px-4 space-y-4 max-w-64">
                                <header>
                                    <h1 className="text-sm font-semibold">Top Topics</h1>
                                </header>

                                <div className="flex justify-between text-sm text-slate-600">
                                    <div className="flex flex-col gap-1">
                                        <p>lorem</p>
                                        <p>lorem</p>
                                        <p>lorem</p>
                                        <p>lorem</p>
                                        <p>lorem</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="p-0.5 rounded-md bg-slate-200">34</p>
                                        <p className="p-0.5 rounded-md bg-slate-200">34</p>
                                        <p className="p-0.5 rounded-md bg-slate-200">34</p>
                                        <p className="p-0.5 rounded-md bg-slate-200">34</p>
                                        <p className="p-0.5 rounded-md bg-slate-200">34</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full border border-slate-200 rounded-md py-3 px-4">
                                <header>
                                    <h1 className="text-sm font-semibold">Sentiment Overview</h1>
                                </header>
                                <div className="flex justify-between items-center">
                                    <div className="h-full w-full p-2">
                                        <div className="bg-green-200 rounded-full min-h-36 w-1/2 max-w-md"></div>
                                    </div>

                                    <div className="flex justify-between w-full">
                                        <div className="flex flex-col gap-2 w-full">
                                            <div className="flex justify-between w-full">
                                                <div className="flex gap-2">
                                                    <div className="bg-green-200 text-green-600 rounded-full">
                                                        <IconMoodHappy size={24} />
                                                    </div>
                                                    <h1 className="font-semibold text-sm">Positive</h1>
                                                </div>
                                                <p className="text-sm text-slate-600">42(82%)</p>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <div className="flex gap-2">
                                                    <div className="bg-red-200 text-red-600 rounded-full">
                                                        <IconMoodSad size={24} />
                                                    </div>
                                                    <h1 className="font-semibold text-sm">Negative</h1>
                                                </div>
                                                <p className="text-sm text-slate-600">42(82%)</p>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <div className="flex gap-2">
                                                    <div className="bg-blue-200 text-blue-600 rounded-full">
                                                        <IconMoodEmpty size={24} />
                                                    </div>
                                                    <h1 className="font-semibold text-sm">Netral</h1>
                                                </div>
                                                <p className="text-sm text-slate-600">42(82%)</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}