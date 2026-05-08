type SkeletonProps = {
    totalSkeleton: number
}

export default function TableSkeleton({ totalSkeleton }: SkeletonProps) {

    return (
        <div className="">
            {[...Array(totalSkeleton)].map((_, index) => (
                <div key={index} className="grid grid-cols-[60px_1fr_700px_40px] bg-white shadow-md items-start px-3 py-3 border-b border-slate-200 hover:bg-gray-50 transition-colors">
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
            ))}
        </div>
    )
}