type SidebarProps = {
    setPageUser: (page: string) => void
}

import Image from "next/image"
import { useState } from "react"
import { IconFolderFilled, IconUsersGroup, IconDatabaseExport, IconLogout } from '@tabler/icons-react';
import Button from "./ui/Button";
import Modal from "./ui/modalDialog";

export default function Sidebar({ setPageUser }: SidebarProps) {

    const [page, setPage] = useState('scrapper')
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const handleClickPage = (page: string) => {
        setPage(page)
        setPageUser(page)
    }

    const handleLogout = async () => {
        setLoading(true)
        const res = await fetch('/api/auth/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })
        if (res.ok) {
            setLoading(false)
            window.location.href = "/login"
        }
    }

    return (
        <>
            <div className="bg-slate-900 h-full min-w-60 pl-0.5 space-y-4 text-slate-200 flex flex-col justify-between">
                <div className="">
                    <div className="p-4">
                        <div className="flex items-start gap-2">
                            <Image src={'/telegram.png'} width={35} height={35} alt="telegram icon" />
                            <div className="flex flex-col">
                                <h1 className="font-semibold text-lg">Telegram Scrapper</h1>
                                <p className="text-gray-300 text-sm">airdrop tracker</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className={`w-full font-semibold text-sm flex items-center gap-2 px-4 py-2 cursor-pointer ${page == 'scrapper' ? 'border-l-4 border-blue-700 bg-blue-800/30' : 'border-l-4 border-transparent hover:border-l-4 hover:border-blue-700 hover:bg-blue-800/30 transition-colors'}`} onClick={() => handleClickPage('scrapper')}>
                            <div className="">
                                <IconDatabaseExport size={24} />
                            </div>
                            <p>Scrap Message</p>
                        </div>
                        <div className={`w-full font-semibold text-sm flex items-center gap-2 px-4 py-2 cursor-pointer ${page == 'project' ? 'border-l-4 border-blue-700 bg-blue-800/30' : 'border-l-4 border-transparent hover:border-l-4 hover:border-blue-700 hover:bg-blue-800/30 transition-colors'}`} onClick={() => handleClickPage('project')}>
                            <div className="">
                                <IconFolderFilled size={24} />
                            </div>
                            <p>Project</p>
                        </div>
                        <div className={`w-full font-semibold text-sm flex items-center gap-2 px-4 py-2 cursor-pointer ${page == 'telegram-group' ? 'border-l-4 border-blue-700 bg-blue-800/30' : 'border-l-4 border-transparent hover:border-l-4 hover:border-blue-700 hover:bg-blue-800/30 transition-colors'}`} onClick={() => handleClickPage('telegram-group')}>
                            <div className="">
                                <IconUsersGroup size={24} />
                            </div>
                            <p>Telegram Group</p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-10">
                    <div className="flex justify-center w-full border border-red-500 bg-red-600/10 hover:bg-red-600/20 rounded-md transition-colors">
                        <Button
                            label="Logout"
                            size="large"
                            type="button"
                            icon={<IconLogout size={22} />}
                            variant="custom"
                            className="text-red-500"
                            onClick={() => setOpenModal(true)}
                        />
                    </div>
                </div>
            </div>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title="Logout?" size="small">
                <div className="px-4 pb-4 space-y-4">
                    <div className="text-slate-600 text-sm text-center">
                        <p>Are you sure want to logout?</p>
                    </div>
                    <div className="flex gap-2 justify-center">
                        <Button
                            type="button"
                            label="Cancel"
                            variant="secondary-red"
                            onClick={() => setOpenModal(false)}
                        />
                        <Button
                            type="button"
                            label="Logout"
                            variant="primary-red"
                            loadingType={loading}
                            onClick={handleLogout}
                        />
                    </div>
                </div>
            </Modal>
        </>
    )
}