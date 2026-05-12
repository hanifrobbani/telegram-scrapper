'use client'
import { ReactNode, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    title?: string
}

export default function Modal({
    isOpen,
    onClose,
    children,
    title
}: ModalProps) {

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        window.addEventListener('keydown', handleEsc)

        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    }, [onClose])

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
                        initial={{
                            opacity: 0,
                            scale: 0.96,
                            y: 10
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.96,
                            y: 10
                        }}
                        transition={{
                            duration: 0.2,
                            ease: 'easeOut'
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-md rounded-xl bg-white shadow-2xl border border-slate-200">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 p-4">
                            <div>
                                {title && (
                                    <h2 className="text-lg font-semibold text-slate-800">
                                        {title}
                                    </h2>
                                )}
                            </div>

                            <button onClick={onClose} className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Content */}
                        <div>
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}