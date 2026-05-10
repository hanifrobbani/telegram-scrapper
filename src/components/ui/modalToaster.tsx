import { useEffect } from "react";
import { IconCircleCheck, IconCircleX, IconX } from "@tabler/icons-react";

type ToasterType = "success" | "error";

interface ToasterProps {
    type: ToasterType;
    message: string;
    isOpen: boolean;
    onClose: () => void;
    autoClose?: boolean;
    duration?: number;
}

export default function Toaster({
    type,
    message,
    isOpen,
    onClose,
    autoClose = true,
    duration = 3000,
}: ToasterProps) {
    useEffect(() => {
        if (!isOpen || !autoClose) return;
        const timer = setTimeout(() => onClose(), duration);
        return () => clearTimeout(timer);
    }, [isOpen, autoClose, duration, onClose]);

    if (!isOpen) return null;

    const config = {
        success: {
            icon: <IconCircleCheck size={18} />,
            containerClass: "bg-green-50 border border-green-400 text-green-700",
            iconClass: "text-green-500",
        },
        error: {
            icon: <IconCircleX size={18} />,
            containerClass: "bg-red-50 border border-red-400 text-red-700",
            iconClass: "text-red-500",
        },
    };

    const { icon, containerClass, iconClass } = config[type];

    return (
        <div className="fixed top-4 right-4 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className={`flex items-center gap-3 rounded-md px-4 py-3 shadow-md text-sm min-w-65 max-w-sm ${containerClass}`}>

                <span className={`shrink-0 ${iconClass}`}>{icon}</span>

                <span className="flex-1">{message}</span>

                <button
                    type="button"
                    onClick={onClose}
                    className="shrink-0 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                >
                    <IconX size={16} />
                </button>
            </div>
        </div>
    );
}