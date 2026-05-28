import { useEffect, useState } from "react"
import { useAddProjectMutation, useDeleteProject, useUpdateProjectMutation } from "@/hooks/useProject"
import { formTelegramProject } from "@/types/telegram.type"
import Input from "../../ui/Input"
import Select from "../../ui/SelectOption"
import { IconLink, IconLabelFilled, IconCategory } from "@tabler/icons-react"
import Button from "../../ui/Button"
import { ShowToast } from "@/types/toaster.type"

type TypeModalProps = {
    showToast: ShowToast
    ModalData: (data: boolean) => void
    ItemSelected?: formTelegramProject | null
}

export const ModalCreateData = ({ ModalData, showToast }: TypeModalProps) => {
    const [form, setForm] = useState<formTelegramProject>({ url_project: '', project_name: '', type: 'airdrop' })
    const { mutate, isError, isPending, error } = useAddProjectMutation(showToast)

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
                        isError={!form.project_name.trim() ? isError : false}
                        errorMessage={error?.message}
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
                            isError={!form.url_project.trim() ? isError : false}
                            errorMessage={error?.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="" className="text-sm text-slate-600">Project Type</label>
                        <Select value={form.type} icon={<IconCategory size={16} />} name="type" onChange={handleChange}>
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

export const ModalUpdateData = ({ showToast, ModalData, ItemSelected }: TypeModalProps) => {
    const [form, setForm] = useState<formTelegramProject>({ url_project: ItemSelected?.url_project ?? '', project_name: ItemSelected?.project_name ?? '', type: ItemSelected?.type ?? '', id: ItemSelected?.id })
    const { mutate, isError, isPending, error } = useUpdateProjectMutation(showToast)

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
                        isError={!form.project_name.trim() ? isError : false}
                        errorMessage={error?.message}
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
                            isError={!form.url_project.trim() ? isError : false}
                            errorMessage={error?.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="" className="text-sm text-slate-600">Project Type</label>
                        <Select value={form.type} icon={<IconCategory size={16} />} name="type" onChange={handleChange}>
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

export const ModalDeleteData = ({ showToast, ModalData, ItemSelected }: TypeModalProps) => {
    const [form, setForm] = useState<formTelegramProject>({ url_project: ItemSelected?.url_project ?? '', project_name: ItemSelected?.project_name ?? '', type: ItemSelected?.type ?? '', id: ItemSelected?.id })
    const { mutate, isPending } = useDeleteProject(showToast)

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