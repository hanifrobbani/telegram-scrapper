import { useGetTeleGroup } from "@/hooks/useTelegramGroup"
import TableSkeleton from "../../ui/tableSkeleton"
import Modal from "../../ui/modalDialog"
import { useEffect, useState } from "react"
import Button from "../../ui/Button"
import { IconPlus, IconMoodConfuzedFilled, IconRotate } from "@tabler/icons-react"
import Toaster from "../../ui/modalToaster"
import { ModalCreateData, ModalUpdateData, ModalDeleteData } from "./ModalTelegramContent"
import { ToasterType } from '@/types/toaster.type'
import { formTelegramGroup } from "@/types/telegram.type"

export default function TelegramGroupPage() {
    const [modalContent, setmodalContent] = useState<'create' | 'delete' | 'update' | null>(null)
    const [itemSelected, setItemSelected] = useState<formTelegramGroup | null>(null)
    const [openModal, setOpenModal] = useState(false)
    const { telegramGroupData, isTelegramGroupError, isTelegramGroupLoading } = useGetTeleGroup()
    const [toaster, setToaster] = useState<ToasterType>({
        isOpen: false,
        type: "success",
        message: ""
    })

    const handleOpenModal = (type: 'create' | 'delete' | 'update', itemSelected?: formTelegramGroup) => {
        setmodalContent(type)
        setOpenModal(true)
        if (itemSelected) setItemSelected(itemSelected)
    }

    const handleToaster = (data: ToasterType) => {
        setToaster(data)
    }

    const handleModalClose = (data: boolean) => {
        setOpenModal(data)
        setmodalContent(null)
        setItemSelected(null)
    }

    useEffect(() => {
        if (modalContent !== null) {
            setOpenModal(true)
        }
    }, [modalContent])

    return (
        <div className="w-full">
            <main className="w-full space-y-4">
                <div className="w-full border border-slate-200 rounded-xl shadow overflow-hidden">

                    <div className="flex items-center justify-between bg-white px-4 py-3 border-b border-slate-200">
                        <div className="relative">
                            <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                            <input
                                type="text"
                                placeholder="Search groups…"
                                className="pl-8 pr-3 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-600 placeholder:text-slate-400 outline-none focus:border-blue-400 focus:bg-white transition-colors w-56"
                            />
                        </div>
                        <Button
                            type="button"
                            label="Add new Group"
                            variant="primary"
                            icon={<IconPlus size={16} />}
                            onClick={() => handleOpenModal('create')}
                        />
                    </div>
                    <div className="grid grid-cols-[48px_1fr_2fr_80px] px-4 py-2 bg-slate-100 border-b border-slate-200">
                        <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">No</div>
                        <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Group name</div>
                        <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">URL</div>
                        <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Actions</div>
                    </div>

                    <div className="flex flex-col">
                        {isTelegramGroupLoading ? (
                            <TableSkeleton totalSkeleton={5} />
                        ) : isTelegramGroupError ? (
                            <div className="flex justify-center bg-white items-start px-3 py-3 border-b border-slate-200 hover:bg-gray-50 transition-colors">
                                <div className="flex flex-col items-center py-10 text-slate-600 gap-2">
                                    <IconMoodConfuzedFilled size={40} />
                                    <h1 className="text-sm">Something went wrong, please try again!</h1>
                                    <Button
                                        type="button"
                                        label=""
                                        variant="secondary"
                                        iconOnly={true}
                                        icon={<IconRotate size={20} />}
                                    />
                                </div>
                            </div>
                        ) : (
                            telegramGroupData?.map((item, index) => (
                                <div key={index} className="grid grid-cols-[48px_1fr_2fr_80px] bg-white items-start px-3 py-3 border-b border-slate-200 hover:bg-gray-50 transition-colors">
                                    <div className="text-sm font-medium text-slate-600 bg-gray-200 p-2 rounded-md max-w-1/2">{index + 1}</div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-semibold text-slate-800 uppercase">{item.title}</p>
                                        <span className="text-xs font-medium text-slate-600 py-0.5 rounded-full w-fit">
                                            no desc at the moment
                                        </span>
                                    </div>
                                    <div className="pr-4">
                                        <a href={item.url_group} target="_blank" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition-colors max-w-full truncate group hover:underline underline-offset-2">
                                            <span className="truncate">{item.url_group}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5a1 1 0 0 1 0 2h-6a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-6a1 1 0 0 1 2 0v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm3 -2h5l.075 .003l.126 .017l.111 .03l.111 .044l.098 .052l.096 .067l.09 .08q .054 .053 .097 .112l.071 .11l.054 .114l.035 .105l.03 .148l.006 .118v5a1 1 0 0 1 -2 0v-2.586l-7.293 7.293a1 1 0 0 1 -1.414 -1.414l7.291 -7.293h-2.584a1 1 0 0 1 0 -2" /></svg>
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <button onClick={() => handleOpenModal('delete', item)} className="p-2 rounded-md border border-red-200 bg-red-50 text-red-500 hover:bg-red-100 hover:border-red-300 transition-colors cursor-pointer"
                                            aria-label="Delete">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                                        </button>
                                        <button onClick={() => handleOpenModal('update', item)} className="p-2 rounded-md border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:border-slate-300 transition-colors cursor-pointer"
                                            aria-label="Edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1 -1v-1a1 1 0 0 1 2 0v1a3 3 0 0 1 -3 3h-9a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h1a1 1 0 0 1 1 1" /><path d="M14.596 5.011l4.392 4.392l-6.28 6.303a1 1 0 0 1 -.708 .294h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 .294 -.708zm6.496 -2.103a3.097 3.097 0 0 1 .165 4.203l-.164 .18l-.693 .694l-4.387 -4.387l.695 -.69a3.1 3.1 0 0 1 4.384 0" /></svg>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}

                    </div>
                </div>
            </main>

            <Modal isOpen={openModal} onClose={() => handleModalClose(false)} title={modalContent === 'create' ? "Add new Telegram Group" : modalContent === 'update' ? "Update Telegram Group" : "Delete Group?"}>
                {modalContent == 'create' ? (
                    <ModalCreateData ToasterData={handleToaster} ModalData={handleModalClose} />
                ) : modalContent == 'update' ? (
                    <ModalUpdateData ToasterData={handleToaster} ModalData={handleModalClose} ItemSelected={itemSelected} />
                ) : (
                    <ModalDeleteData ToasterData={handleToaster} ModalData={handleModalClose} ItemSelected={itemSelected}/>
                )}
            </Modal>
            <Toaster
                type={toaster.type}
                message={toaster.message}
                isOpen={toaster.isOpen}
                onClose={() => setToaster(prev => ({ ...prev, isOpen: false }))}
                autoClose={true}
                duration={3000}
            />
        </div>
    )
}