export const DonutChartLoader = () => {
    return (
        <div className="flex justify-between items-center py-2">

            <div className="relative flex items-center justify-center h-48 w-48 animate-pulse">
                <div className="absolute w-full h-full rounded-full bg-gray-300"></div>

                <div className="absolute w-full h-full rounded-full bg-[conic-gradient(#9CA3AF_0%_144deg,transparent_144deg_360deg)]">
                </div>

                <div className="absolute w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-md">
                </div>
            </div>

            <div className="flex flex-col gap-3 w-1/2">
                <div className="animate-pulse w-full flex items-center gap-3">
                    <div className=" bg-gray-300 w-6 h-6 rounded-full" />
                    <div className=" bg-gray-300 w-full h-4 rounded-md" />
                </div>
                <div className="animate-pulse w-full flex items-center gap-3">
                    <div className=" bg-gray-300 w-6 h-6 rounded-full" />
                    <div className=" bg-gray-300 w-full h-4 rounded-md" />
                </div>
                <div className="animate-pulse w-full flex items-center gap-3">
                    <div className=" bg-gray-300 w-6 h-6 rounded-full" />
                    <div className=" bg-gray-300 w-full h-4 rounded-md" />
                </div>
                <div className="animate-pulse w-full flex items-center gap-3">
                    <div className=" bg-gray-300 w-6 h-6 rounded-full" />
                    <div className=" bg-gray-300 w-full h-4 rounded-md" />
                </div>
            </div>
        </div>
    )
}

export const BarChartLoader = () => {
    return (
        <div className="w-full flex flex-col justify-between p-4 bg-gray-50 rounded-lg animate-pulse" style={{ height: '220px' }}>
            <div className="w-full flex items-end justify-between flex-1 gap-2 pt-4 pb-2 px-6">
                <div className="w-[12%] h-[20%] bg-gray-200 rounded"></div>
                <div className="w-[12%] h-[45%] bg-gray-200 rounded"></div>
                <div className="w-[12%] h-[65%] bg-gray-200 rounded"></div>
                <div className="w-[12%] h-[85%] bg-gray-200 rounded"></div>
                <div className="w-[12%] h-[75%] bg-gray-200 rounded"></div>
                <div className="w-[12%] h-[50%] bg-gray-200 rounded"></div>
                <div className="w-[12%] h-[35%] bg-gray-200 rounded"></div>
            </div>

            <div className="w-full flex justify-between border-t border-gray-200 pt-2 px-6">
                <div className="h-3 w-8 bg-gray-200 rounded"></div>
                <div className="h-3 w-8 bg-gray-200 rounded"></div>
                <div className="h-3 w-8 bg-gray-200 rounded"></div>
                <div className="h-3 w-8 bg-gray-200 rounded"></div>
                <div className="h-3 w-8 bg-gray-200 rounded"></div>
                <div className="h-3 w-8 bg-gray-200 rounded"></div>
                <div className="h-3 w-8 bg-gray-200 rounded"></div>
            </div>
        </div>
    )
}

export const LineChartLoader = () => {
    return (
        <div className="w-full h-55 relative animate-pulse">
            {/* Grid */}
            <div className="absolute inset-0 flex flex-col justify-between pb-7">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="border-t border-gray-300"
                    />
                ))}
            </div>

            {/* Y Axis Labels */}
            <div className="absolute left-0 top-0 h-[calc(100%-28px)] flex flex-col justify-between">
                {["1200", "900", "600", "300", "0"].map((_, i) => (
                    <div
                        key={i}
                        className="h-3 w-8 bg-gray-300 rounded"
                    />
                ))}
            </div>

            {/* Chart Area */}
            <div className="absolute left-12 right-2 top-2 bottom-8">
                <svg
                    viewBox="0 0 400 160"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                >
                    {/* Fake Line */}
                    <path
                        d="
                        M10 110
                        C50 90, 80 80, 110 85
                        C140 90, 170 95, 210 85
                        C230 80, 240 70, 250 40
                        C260 20, 280 15, 320 15
                        C350 15, 370 16, 390 16
                    "
                        fill="none"
                        stroke="#9CA3AF"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* X Axis */}
            <div className="absolute left-12 right-0 bottom-0 flex justify-between">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (_, i) => (
                        <div
                            key={i}
                            className="h-3 w-8 bg-gray-300 rounded"
                        />
                    )
                )}
            </div>
        </div>
    )
}