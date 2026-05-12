
import { useEffect, useState } from "react"
import { formTelegramGroup } from "@/types/telegram.type"
import { useAddTelegramGroupMutation, useUpdateTelegramGroupMutation, useDeleteTelegramGroup } from "@/hooks/useTelegramGroup"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import { IconLabelFilled, IconLink } from "@tabler/icons-react"
import { ToasterType } from '@/types/toaster.type'

type TypeModalProps = {
    ToasterData: (data: ToasterType) => void
    ModalData: (data: boolean) => void
    ItemSelected?: formTelegramGroup
}

export const ModalCreateData = ({ ToasterData, ModalData }: TypeModalProps) => {

    const [form, setForm] = useState<formTelegramGroup>({ url_group: '', title: '' })
    const { mutate, isError, isPending, toaster } = useAddTelegramGroupMutation()

    useEffect(() => {
        if (toaster.isOpen) {
            ToasterData(toaster)
            ModalData(false)
        }
    }, [toaster])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                    <label htmlFor="" className="text-sm text-slate-600">Group Name</label>
                    <Input
                        name="title"
                        placeholder="Name of the Group"
                        icon={<IconLabelFilled size={16} />}
                        value={form.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="" className="text-sm text-slate-600">Group URL</label>
                    <Input
                        name="url_group"
                        placeholder="URL Group"
                        icon={<IconLink size={16} />}
                        value={form.url_group}
                        onChange={handleChange}
                    />
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
    const [form, setForm] = useState<formTelegramGroup>({ url_group: ItemSelected?.url_group ?? '', title: ItemSelected?.title ?? '', id: ItemSelected?.id })
    const { mutate, isError, isPending, toaster } = useUpdateTelegramGroupMutation()

    useEffect(() => {
        if (toaster.isOpen) {
            ToasterData(toaster)
            ModalData(false)
        }
    }, [toaster])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                    <label htmlFor="" className="text-sm text-slate-600">Group Name</label>
                    <Input
                        name="title"
                        placeholder="Name of the Group"
                        icon={<IconLabelFilled size={16} />}
                        value={form.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="" className="text-sm text-slate-600">Group URL</label>
                    <Input
                        name="url_group"
                        placeholder="URL Group"
                        icon={<IconLink size={16} />}
                        value={form.url_group}
                        onChange={handleChange}
                    />
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
    const [form, setForm] = useState<formTelegramGroup>({ url_group: ItemSelected?.url_group ?? '', title: ItemSelected?.title ?? '', id: ItemSelected?.id })
    const { mutate, isError, isPending, toaster } = useDeleteTelegramGroup()

    useEffect(() => {
        if (toaster.isOpen) {
            ToasterData(toaster)
            ModalData(false)
        }
    }, [toaster])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutate(form)
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4 px-4 pb-4">
            <div className="text-slate-600 text-sm">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sequi quasi quisquam odio repellat officia iusto debitis nobis eum voluptate?</p>
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