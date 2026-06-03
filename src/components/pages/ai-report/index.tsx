import dynamic from 'next/dynamic';
import Select from "../../ui/SelectOption"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import { IconFileTypePdf, IconSparklesFilled, IconSpeakerphone, IconTrendingUp, IconRefresh, IconFolderOpen, IconSkull, IconCaretDownFilled, IconCaretUpFilled, IconMessage, IconInfoCircle, IconAlertTriangle, IconChevronRightFilled, IconChartPie, IconTrophy, IconDownload } from "@tabler/icons-react"
import { DonutChartLoader, BarChartLoader, LineChartLoader } from '@/components/ui/loader/chartLoader';
import Image from 'next/image';

const DonutChart = dynamic(() => import('./chart/DonutChart'), {
    ssr: false,
    loading: () => <DonutChartLoader />
});
const BarChart = dynamic(() => import('./chart/BarChart'), {
    ssr: false,
    loading: () => <BarChartLoader />
});
const LineChart = dynamic(() => import('./chart/LineChart'), {
    ssr: false,
    loading: () => <LineChartLoader />
});
export default function AIReportPage() {

    const isDataReady = false

    return (
        <div className="w-full">

            <main className="w-full flex flex-col gap-5">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 space-y-4">
                    <form className="flex gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">Select Group</label>
                            <Select icon={<IconSpeakerphone size={20} />} name="channelUrl">
                                <option value="">test</option>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-semibold text-sm text-slate-700">Date Range</label>
                            <div className="flex gap-2 border border-slate-400 rounded-md">
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

                        <div className="w-full flex items-end gap-3">
                            <Button
                                type="submit"
                                label="Generate Report"
                                variant="primary"
                                size="normal"
                                icon={<IconSparklesFilled size={22} />}
                                // loadingType={isPending}
                                className="w-full text-center text-xs"
                            />
                            <Button
                                type="button"
                                label="Export PDF"
                                variant="secondary"
                                size="normal"
                                icon={<IconFileTypePdf size={22} className="text-red-600" />}
                                // loadingType={isPending}
                                className="w-full text-center text-xs"

                            />
                        </div>
                    </form>
                </div>
                {isDataReady ? (
                    <div className="w-full flex flex-col gap-5">
                        <div className="bg-white flex gap-4 border border-slate-200 rounded-2xl shadow-sm p-5">
                            <div className="flex gap-4 border-r border-slate-200 pr-3 w-full">
                                <div className="flex flex-col gap-3 justify-between">
                                    <div className="bg-green-200 rounded-xl p-3  text-green-600">
                                        <IconFolderOpen size={30} />
                                    </div>
                                    <div className="text-center text-xs text-green-600 bg-green-200 p-1 rounded-md font-semibold">+62%</div>
                                </div>
                                <div className="flex flex-col gap-3 justify-between">
                                    <div className="">
                                        <h1 className="font-semibold text-sm">New Project</h1>
                                        <p className="text-xl font-semibold">21</p>
                                    </div>

                                    <p className="text-xs text-slate-600">from last 7 days</p>
                                </div>
                            </div>
                            <div className="flex gap-4 border-r border-slate-200 pr-3 w-full">
                                <div className="flex flex-col gap-3 justify-between">
                                    <div className="bg-orange-200 rounded-xl p-3  text-orange-600">
                                        <IconRefresh size={30} />
                                    </div>
                                    <div className="text-center text-xs text-green-600 bg-green-200 p-1 rounded-md font-semibold">+62%</div>
                                </div>
                                <div className="flex flex-col gap-3 justify-between">
                                    <div className="">
                                        <h1 className="font-semibold text-sm">Updated Project</h1>
                                        <p className="text-xl font-semibold">21</p>
                                    </div>

                                    <p className="text-xs text-slate-600">from last 7 days</p>
                                </div>
                            </div>
                            <div className="flex gap-4 border-r border-slate-200 pr-3 w-full">
                                <div className="flex flex-col gap-3 justify-between">
                                    <div className="bg-blue-200 rounded-xl p-3  text-blue-600">
                                        <IconTrendingUp size={30} />
                                    </div>
                                    <div className="text-center text-xs text-green-600 bg-green-200 p-1 rounded-md font-semibold">+62%</div>
                                </div>
                                <div className="flex flex-col gap-3 justify-between">
                                    <div className="">
                                        <h1 className="font-semibold text-sm">Active Project</h1>
                                        <p className="text-xl font-semibold">21</p>
                                    </div>

                                    <p className="text-xs text-slate-600">from last 7 days</p>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div className="flex flex-col gap-3 justify-between">
                                    <div className="bg-red-200 rounded-xl p-3  text-red-600">
                                        <IconSkull size={30} />
                                    </div>
                                    <div className="text-center text-xs text-red-600 bg-red-200 p-1 rounded-md font-semibold">+62%</div>
                                </div>
                                <div className="flex flex-col gap-3 justify-between">
                                    <div className="">
                                        <h1 className="font-semibold text-sm">Dead Project</h1>
                                        <p className="text-xl font-semibold">21</p>
                                    </div>

                                    <p className="text-xs text-slate-600">from last 7 days</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-100 border-l-4 border-blue-600 rounded-md p-4">
                            <h1 className="font-semibold text-blue-600">Executive Summary</h1>
                            <p className="text-slate-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, sunt dolores, illo ad pariatur minus quae quam ipsa voluptas deleniti odio dolorum repellat dolorem consequuntur ea temporibus! Autem tenetur illo accusamus placeat quia est tempora provident ea non at sed deserunt voluptatum eligendi minus obcaecati numquam, hic assumenda ex dicta.</p>
                        </div>

                        <div className="flex justify-between gap-5">
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 w-full">
                                <header>
                                    <h1 className="font-semibold">Airdrop Type Distribution</h1>
                                </header>
                                <div className="">
                                    <DonutChart />
                                </div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 w-full">
                                <header>
                                    <h1 className="font-semibold">Top Chain by Airdrop Activity</h1>
                                </header>
                                <div>
                                    <BarChart />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between gap-5">
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 w-full space-y-2">
                                <header>
                                    <h1 className="font-semibold">Airdrop Type Trend</h1>
                                </header>

                                <div className="flex flex-col">
                                    <div className="flex justify-between border-t border-slate-400 py-2">
                                        <div className="flex gap-2 items-center">
                                            <div className="">
                                                <div className="bg-blue-600 text-white p-1 rounded-md">
                                                    <IconMessage size={14} />
                                                </div>
                                            </div>
                                            <p className='text-sm text-slate-800 font-semibold'>Testnet</p>
                                        </div>
                                        <div className="flex items-center gap-10">
                                            <p className='text-sm text-slate-600'>45%</p>
                                            <div className="text-green-600 flex items-center">
                                                <IconCaretUpFilled size={14} />
                                                <p className='text-sm'>8%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-t border-slate-400 py-2">
                                        <div className="flex gap-2 items-center">
                                            <div className="">
                                                <div className="bg-blue-600 text-white p-1 rounded-md">
                                                    <IconMessage size={14} />
                                                </div>
                                            </div>
                                            <p className='text-sm text-slate-800 font-semibold'>Testnet</p>
                                        </div>
                                        <div className="flex items-center gap-10">
                                            <p className='text-sm text-slate-600'>45%</p>
                                            <div className="text-green-600 flex items-center">
                                                <IconCaretUpFilled size={14} />
                                                <p className='text-sm'>8%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-t border-slate-400 py-2">
                                        <div className="flex gap-2 items-center">
                                            <div className="">
                                                <div className="bg-blue-600 text-white p-1 rounded-md">
                                                    <IconMessage size={14} />
                                                </div>
                                            </div>
                                            <p className='text-sm text-slate-800 font-semibold'>Testnet</p>
                                        </div>
                                        <div className="flex items-center gap-10">
                                            <p className='text-sm text-slate-600'>45%</p>
                                            <div className="text-green-600 flex items-center">
                                                <IconCaretUpFilled size={14} />
                                                <p className='text-sm'>8%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between border-t border-slate-400 py-2">
                                        <div className="flex gap-2 items-center">
                                            <div className="">
                                                <div className="bg-blue-600 text-white p-1 rounded-md">
                                                    <IconMessage size={14} />
                                                </div>
                                            </div>
                                            <p className='text-sm text-slate-800 font-semibold'>Testnet</p>
                                        </div>
                                        <div className="flex items-center gap-10">
                                            <p className='text-sm text-slate-600'>45%</p>
                                            <div className="text-green-600 flex items-center">
                                                <IconCaretUpFilled size={14} />
                                                <p className='text-sm'>8%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 w-full">
                                <header className='flex gap-2 items-center'>
                                    <div className="">
                                        <div className="bg-yellow-100 text-orange-600 p-2 rounded-md">
                                            <IconAlertTriangle size={22} />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h1 className="font-semibold">Potential Dead/Scam Project</h1>
                                        <p className='text-xs text-slate-600'>AI Detected this project with high risk</p>
                                    </div>
                                </header>

                                <div className="mt-2">
                                    <table className="w-full text-sm text-left rtl:text-right text-body">
                                        <thead className="text-sm border-b border-slate-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-sm text-slate-800">
                                                    Project Name
                                                </th>
                                                <th scope="col" className="flex flex-1 justify-center py-3 text-sm text-slate-800">
                                                    Risk Level
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-slate-600 border-b border-slate-400 text-sm">
                                                <th scope="row" className="px-6 py-2 font-normal whitespace-nowrap">
                                                    Haha Wallet
                                                </th>
                                                <td className="px-6 py-2 flex flex-1 justify-center">
                                                    <p className='p-1 bg-red-200 text-red-600 rounded-md'>High</p>
                                                </td>
                                            </tr>
                                            <tr className="text-slate-600 border-b border-slate-400 text-sm">
                                                <th scope="row" className="px-6 py-2 font-normal whitespace-nowrap">
                                                    Test Project
                                                </th>
                                                <td className="px-6 py-2 flex flex-1 justify-center">
                                                    <p className='p-1 bg-yellow-200 text-orange-600 rounded-md'>Medium</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 w-full">
                            <header className='flex gap-2 items-center'>
                                <div className="">
                                    <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                                        <IconTrendingUp size={22} />
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className="font-semibold">Trend Analysis</h1>
                                    <p className='text-xs text-slate-600'>Activity overview & pattern</p>
                                </div>
                            </header>

                            <div className="mt-2 flex justify-between">
                                <div className="w-full">
                                    <LineChart />
                                </div>
                                <div className="w-1/2 border-l border-slate-400 px-4">
                                    <div className="flex justify-between py-1">
                                        <div className="flex items-center gap-2">
                                            <div className="">
                                                <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                                                    <IconTrendingUp size={18} />
                                                </div>
                                            </div>
                                            <h1 className="text-slate-600">Base</h1>
                                        </div>
                                        <div className="text-green-600 flex items-center">
                                            <IconCaretUpFilled size={14} />
                                            <p className='text-sm'>8%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-1">
                                        <div className="flex items-center gap-2">
                                            <div className="">
                                                <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                                                    <IconTrendingUp size={18} />
                                                </div>
                                            </div>
                                            <h1 className="text-slate-600">Base</h1>
                                        </div>
                                        <div className="text-green-600 flex items-center">
                                            <IconCaretUpFilled size={14} />
                                            <p className='text-sm'>8%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-1">
                                        <div className="flex items-center gap-2">
                                            <div className="">
                                                <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                                                    <IconTrendingUp size={18} />
                                                </div>
                                            </div>
                                            <h1 className="text-slate-600">Base</h1>
                                        </div>
                                        <div className="text-green-600 flex items-center">
                                            <IconCaretUpFilled size={14} />
                                            <p className='text-sm'>8%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-1">
                                        <div className="flex items-center gap-2">
                                            <div className="">
                                                <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                                                    <IconTrendingUp size={18} />
                                                </div>
                                            </div>
                                            <h1 className="text-slate-600">Base</h1>
                                        </div>
                                        <div className="text-green-600 flex items-center">
                                            <IconCaretUpFilled size={14} />
                                            <p className='text-sm'>8%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-1">
                                        <div className="flex items-center gap-2">
                                            <div className="">
                                                <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                                                    <IconTrendingUp size={18} />
                                                </div>
                                            </div>
                                            <h1 className="text-slate-600">Base</h1>
                                        </div>
                                        <div className="text-green-600 flex items-center">
                                            <IconCaretUpFilled size={14} />
                                            <p className='text-sm'>8%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 w-full">
                            <header className='flex gap-2 items-center'>
                                <div className="">
                                    <div className="bg-yellow-100 text-orange-600 p-2 rounded-md">
                                        <IconInfoCircle size={22} />
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className="font-semibold">Top Priority Projects</h1>
                                    <p className='text-xs text-slate-600'>AI ranked projects by priority access</p>
                                </div>
                            </header>
                            <div className="mt-2">
                                <table className="w-full text-sm text-left rtl:text-right text-body">
                                    <thead className="text-sm border-b border-slate-400">
                                        <tr>
                                            <th scope="col" className="py-3 text-sm text-slate-800">
                                                Rank
                                            </th>
                                            <th scope="col" className="py-3 text-sm text-slate-800">
                                                Project Name
                                            </th>
                                            <th scope="col" className="py-3 text-sm text-slate-800">
                                                Priority Access
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-slate-600 border-b border-slate-400 text-sm">
                                            <th scope="row" className="py-2 font-normal whitespace-nowrap">
                                                1
                                            </th>
                                            <td className="py-2">
                                                Layer Zero
                                            </td>
                                            <td className="py-2">
                                                90/100
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-between gap-5">
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
                            <div className="flex flex-col justify-center items-center w-full text-center">
                                <Image width={350} height={350} src={'/no-report-generated.png'} alt='default no data img report page' />
                                <h1 className='text-lg font-semibold'>No AI Report Generated Yet</h1>
                                <p className='text-slate-600 text-sm'>Generate your first AI report to get insight and trend data pattern from your scrapped Telegram announcemnets!</p>
                                <div className="w-full flex justify-center py-4">
                                    <Button
                                        type="submit"
                                        label="Generate Report"
                                        variant="primary"
                                        size="large"
                                        icon={<IconSparklesFilled size={22} />}
                                        // loadingType={isPending}
                                        className="text-center text-xs"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex flex-col w-1/2 gap-4">
                            <header>
                                <h1 className='text-lg font-semibold'>What you'll get</h1>
                            </header>
                            <div className="flex gap-3">
                                <div className="">
                                    <div className="bg-blue-200 text-blue-600 p-2 rounded-md">
                                        <IconChartPie  size={30}/>
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='font-semibold'>Project Landscape Overview</h1>
                                    <p className='text-sm text-slate-600'>Overview of new or updated project, top chain and dominant airdrop types.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="">
                                    <div className="bg-green-200 text-green-600 p-2 rounded-md">
                                        <IconTrophy  size={30}/>
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='font-semibold'>Priority Score Projects</h1>
                                    <p className='text-sm text-slate-600'>AI will automaticaly ranked the best project to farm.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="">
                                    <div className="bg-orange-200 text-orange-600 p-2 rounded-md">
                                        <IconTrendingUp  size={30}/>
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='font-semibold'>Trend Analysis</h1>
                                    <p className='text-sm text-slate-600'>Chart trend overview, ecosystem growth & time based patterns.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="">
                                    <div className="bg-purple-200 text-purple-600 p-2 rounded-md">
                                        <IconDownload   size={30}/>
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='font-semibold'>Export Data</h1>
                                    <p className='text-sm text-slate-600'>Your generated data can be save to a PDF file!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
                <div className="py-2 text-slate-600 text-xs flex gap-1">
                    <IconInfoCircle size={16} />
                    <p>Report are generated by AI based on scrapped data from 12/06/2026 to 13/06/2026, data may not be 100% accurate</p>
                </div>
            </main>

        </div>
    )
}