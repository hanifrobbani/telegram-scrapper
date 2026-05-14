interface LoadingBarProps {
    progress: number; // 0 - 100
    label?: string;
    showPercent?: boolean;
}

export default function LoadingBar({
    progress,
    label = "Scraping",
    showPercent = true,
}: LoadingBarProps) {
    const clampedProgress = Math.min(100, Math.max(0, progress));

    return (
        <div className="flex flex-col gap-2 w-full">
            {/* Track */}
            <div className="relative w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                {/* Fill */}
                <div
                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-500 ease-out"
                    style={{
                        width: `${clampedProgress}%`,
                        background: "linear-gradient(90deg, #3b82f6, #6366f1)",
                    }}
                >
                    {/* Animated stripe overlay */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(135deg, transparent, transparent 6px, rgba(255,255,255,0.18) 6px, rgba(255,255,255,0.18) 12px)",
                            backgroundSize: "28px 100%",
                            animation: "stripe-move 1s linear infinite",
                        }}
                    />
                </div>
            </div>

            {/* Label */}
            {showPercent && (
                <p className="text-center text-sm text-slate-400 tracking-wide">
                    {label}...{" "}
                    <span className="font-semibold text-slate-500">
                        {clampedProgress}%
                    </span>
                </p>
            )}

            <style>{`
                @keyframes stripe-move {
                    from { background-position: 0 0; }
                    to   { background-position: 28px 0; }
                }
                @keyframes shimmer {
                    0%   { background-position: -200% 0; }
                    100% { background-position:  200% 0; }
                }
            `}</style>
        </div>
    );
}