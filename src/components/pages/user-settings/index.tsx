import Button from "@/components/ui/Button"
import { IconPencil, IconTrash } from "@tabler/icons-react"

export default function UserSettingsPage() {
    return (
        <div className="w-full">
            <div className="flex w-full flex-col gap-5">
                <div className="w-full bg-white rounded-sm shadow-sm px-5 py-3 flex flex-col gap-4">
                    <header className="border-b border-slate-300">
                        <h1 className="font-semibold text-slate-700 text-lg">Main Profile</h1>
                    </header>

                    <div className="flex items-center gap-4">
                        <div className="">
                            <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                                <p className="text-white text-2xl font-semibold">N</p>
                            </div>
                        </div>

                        <div className="w-full flex justify-between">
                            <div className="">
                                <p className="font-semibold text-slate-700">Nick Admin</p>
                                <p className="text-sm text-slate-600">nickadmin@example.com</p>
                            </div>
                            <div className="">
                                <Button label="Change" type="button" variant="secondary" icon={<IconPencil size={22} />} />
                            </div>
                        </div>

                    </div>

                    <div className="w-full">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                <div className="">
                                    <h1 className="font-semibold text-sm text-slate-700">Change Password</h1>
                                    <p className="text-sm text-slate-500">You need to remember your current password to change it to the new one!</p>
                                </div>
                                <div className="">
                                    <Button label="Change Password" type="button" variant="secondary" icon={<IconPencil size={22} />} />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">
                                    <h1 className="font-semibold text-sm text-slate-700">Delete Account</h1>
                                    <p className="text-sm text-slate-500">This Action cannot be undo, please be carefull!</p>
                                </div>
                                <div className="">
                                    <Button label="Delete Account" type="button" variant="secondary-red" icon={<IconTrash size={22} />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}