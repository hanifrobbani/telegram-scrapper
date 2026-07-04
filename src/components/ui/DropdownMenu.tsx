import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownMenuProps {
    trigger: ReactNode;
    children: ReactNode;
    align?: "left" | "right";
    className?: string;
}

export function DropdownMenu({
    trigger,
    children,
    align = "left",
    className = "w-72",
}: DropdownMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const positionClass = align === "left" ? "right-0 origin-top-right" : "left-0 origin-top-left";

    return (
        <div className="relative" ref={dropdownRef}>
            <div onClick={() => setIsOpen((prev) => !prev)}>{trigger}</div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className={`absolute top-full mt-1 ${positionClass} ${className} bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden`}
                    >
                        <div className="relative">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}