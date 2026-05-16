'use client'
import { ReactNode, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    title?: string
    description?: string
    icon?: ReactNode
    iconColor?: 'blue' | 'green' | 'red' | 'yellow' | 'slate'
    size?: string
}

const iconColorMap: Record<NonNullable<ModalProps['iconColor']>, string> = {
    blue: 'bg-blue-100 text-blue-500',
    green: 'bg-green-100 text-green-500',
    red: 'bg-red-100 text-red-500',
    yellow: 'bg-yellow-100 text-yellow-500',
    slate: 'bg-slate-100 text-slate-500',
}

export default function Modal({
    isOpen,
    onClose,
    children,
    title,
    description,
    icon,
    iconColor = 'blue',
    size = "medium"
}: ModalProps) {

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    const modalSize = size === "medium" ? "max-w-md" : size === "large" ? "max-w-4xl" : "max-w-sm"
    const hasHeaderContent = title || description || icon

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                    onClick={onClose}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 10 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-full ${modalSize} rounded-xl bg-white shadow-2xl border border-slate-200`}>
                        {hasHeaderContent && (
                            <div className="flex items-center justify-between border-b border-slate-100 p-4">
                                <div className="flex items-center gap-3">
                                    {icon && (
                                        <div className={`flex p-2 shrink-0 items-center justify-center rounded-xl ${iconColorMap[iconColor]}`}>
                                            {icon}
                                        </div>
                                    )}

                                    {(title || description) && (
                                        <div className="flex flex-col">
                                            {title && (
                                                <h2 className="font-semibold text-slate-800 leading-tight">
                                                    {title}
                                                </h2>
                                            )}
                                            {description && (
                                                <p className="text-sm text-slate-400 leading-tight">
                                                    {description}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <button onClick={onClose} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M18 6l-12 12" />
                                        <path d="M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        <div>{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}