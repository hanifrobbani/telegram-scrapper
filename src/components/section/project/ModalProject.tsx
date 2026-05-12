import { useEffect, useState } from "react"
import { useAddProjectMutation, useDeleteProject, useUpdateProjectMutation } from "@/hooks/useProject"
import { formTelegramProject } from "@/types/telegram.type"
import Input from "../../ui/Input"
import Select from "../../ui/SelectOption"
import { IconLink, IconLabelFilled, IconCategory } from "@tabler/icons-react"
import { ToasterType } from '@/types/toaster.type'
import Button from "../../ui/Button"

type TypeModalProps = {
    ToasterData: (data: ToasterType) => void
    ModalData: (data: boolean) => void
    ItemSelected?: formTelegramProject | null
}

export const ModalCreateData = ({ ToasterData, ModalData }: TypeModalProps) => {
    const [form, setForm] = useState<formTelegramProject>({ url_project: '', project_name: '', type: '' })
    const { mutate, isError, isPending, toaster } = useAddProjectMutation()

    useEffect(() => {
        if (toaster.isOpen) {
            ModalData(false)
            setTimeout(() => {
                ToasterData(toaster)
            }, 200)
        }
    }, [toaster])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutate(form)
    }
    return (
        <div className="border-t border-slate-400">
            <form onSubmit={handleSubmit} className="p-4 space-y-2">
                <div className="">
                    <label htmlFor="" className="text-sm text-slate-600">Project Name</label>
                    <Input
                        name="project_name"
                        placeholder="Name of the project"
                        icon={<IconLabelFilled size={16} />}
                        value={form.project_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex gap-2 w-full flex-col">
                    <div className="w-full">
                        <label htmlFor="" className="text-sm text-slate-600">Project URL</label>
                        <Input
                            name="url_project"
                            placeholder="URL of the Project"
                            icon={<IconLink size={16} />}
                            value={form.url_project}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="" className="text-sm text-slate-600">Project Type</label>
                        <Select value={form.type} icon={<IconCategory size={16} />} name="type" onChange={handleChange}>
                            <option value="">Select Type</option>
                            <option value="airdrop">Airdrop</option>
                            <option value="trade">Trade</option>
                            <option value="nft">NFTs</option>
                        </Select>
                    </div>
                </div>

                <div className="flex justify-end gap-2 mt-5">
                    <Button
                        type="button"
                        label="Cancel"
                        variant="secondary"
                        onClick={() => ModalData(false)}
                    />
                    <Button
                        type="submit"
                        label="Save"
                        variant="primary"
                        loadingType={isPending}
                    />
                </div>
            </form>
        </div>
    )
}

export const ModalUpdateData = ({ ToasterData, ModalData, ItemSelected }: TypeModalProps) => {
    const [form, setForm] = useState<formTelegramProject>({ url_project: ItemSelected?.url_project ?? '', project_name: ItemSelected?.project_name ?? '', type: ItemSelected?.type ?? '', id: ItemSelected?.id })
    const { mutate, isError, isPending, toaster } = useUpdateProjectMutation()

    useEffect(() => {
        if (toaster.isOpen) {
            ModalData(false)
            setTimeout(() => {
                ToasterData(toaster)
            }, 200)
        }
    }, [toaster])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutate(form)
    }
    return (
        <div className="border-t border-slate-400">
            <form onSubmit={handleSubmit} className="p-4 space-y-2">
                <div className="">
                    <label htmlFor="" className="text-sm text-slate-600">Project Name</label>
                    <Input
                        name="project_name"
                        placeholder="Name of the project"
                        icon={<IconLabelFilled size={16} />}
                        value={form.project_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex gap-2 w-full flex-col">
                    <div className="w-full">
                        <label htmlFor="" className="text-sm text-slate-600">Project URL</label>
                        <Input
                            name="url_project"
                            placeholder="URL of the Project"
                            icon={<IconLink size={16} />}
                            value={form.url_project}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="" className="text-sm text-slate-600">Project Type</label>
                        <Select value={form.type} icon={<IconCategory size={16} />} name="type" onChange={handleChange}>
                            <option value="">Select Type</option>
                            <option value="airdrop">Airdrop</option>
                            <option value="trade">Trade</option>
                            <option value="nft">NFTs</option>
                        </Select>
                    </div>
                </div>

                <div className="flex justify-end gap-2 mt-5">
                    <Button
                        type="button"
                        label="Cancel"
                        variant="secondary"
                        onClick={() => ModalData(false)}
                    />
                    <Button
                        type="submit"
                        label="Save"
                        variant="primary"
                        loadingType={isPending}
                    />
                </div>
            </form>
        </div>
    )
}

export const ModalDeleteData = ({ ToasterData, ModalData, ItemSelected }: TypeModalProps) => {
    const [form, setForm] = useState<formTelegramProject>({ url_project: ItemSelected?.url_project ?? '', project_name: ItemSelected?.project_name ?? '', type: ItemSelected?.type ?? '', id: ItemSelected?.id })
    const { mutate, isError, isPending, toaster } = useDeleteProject()

    useEffect(() => {
        if (toaster.isOpen) {
            ModalData(false)
            setTimeout(() => {
                ToasterData(toaster)
            }, 200)
        }
    }, [toaster])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutate(form)
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4 px-4 pb-4">
            <div className="text-slate-600 text-sm">
                <p>Are you sure want to delete this project? once it's deleted there's no going back, do it carefully!</p>
            </div>
            <div className="flex gap-2 justify-center">
                <Button
                    type="button"
                    label="Cancel"
                    variant="secondary-red"
                />
                <Button
                    type="submit"
                    label="Delete"
                    variant="primary-red"
                    loadingType={isPending}
                />
            </div>
        </form>
    )
}