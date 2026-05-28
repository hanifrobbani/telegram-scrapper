
import { useEffect, useState } from "react"
import { formTelegramGroup } from "@/types/telegram.type"
import { useAddTelegramGroupMutation, useUpdateTelegramGroupMutation, useDeleteTelegramGroup } from "@/hooks/useTelegramGroup"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import { IconLabelFilled, IconLink } from "@tabler/icons-react"
import { ShowToast } from "@/types/toaster.type"

type TypeModalProps = {
    showToast: ShowToast
    ModalData: (data: boolean) => void
    ItemSelected?: formTelegramGroup | null
}

export const ModalCreateData = ({ showToast, ModalData }: TypeModalProps) => {

    const [form, setForm] = useState<formTelegramGroup>({ url_group: '', title: '' })
    const { mutate, isError, isPending, error } = useAddTelegramGroupMutation(showToast)
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
                        isError={!form.title.trim() ? isError : false}
                        errorMessage={error?.message}
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
                        isError={!form.url_group.trim() ? isError : false}
                        errorMessage={error?.message}
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

export const ModalUpdateData = ({ showToast, ModalData, ItemSelected }: TypeModalProps) => {
    const [form, setForm] = useState<formTelegramGroup>({ url_group: ItemSelected?.url_group ?? '', title: ItemSelected?.title ?? '', id: ItemSelected?.id })
    const { mutate, isError, isPending, error } = useUpdateTelegramGroupMutation(showToast)
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
                        isError={!form.title.trim() ? isError : false}
                        errorMessage={error?.message}
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
                        isError={!form.url_group.trim() ? isError : false}
                        errorMessage={error?.message}
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

export const ModalDeleteData = ({ showToast, ModalData, ItemSelected }: TypeModalProps) => {
    const [form, setForm] = useState<formTelegramGroup>({ url_group: ItemSelected?.url_group ?? '', title: ItemSelected?.title ?? '', id: ItemSelected?.id })
    const { mutate, isPending } = useDeleteTelegramGroup(showToast)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutate(form)
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4 px-4 pb-4">
            <div className="text-slate-600 text-sm">
                <p>Are you sure want to delete this group? once it's deleted there's no going back, do it carefully!</p>
            </div>
            <div className="flex gap-2 justify-center">
                <Button
                    type="button"
                    label="Cancel"
                    variant="secondary-red"
                    onClick={() => ModalData(false)}
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