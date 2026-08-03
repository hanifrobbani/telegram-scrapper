import Button from "@/components/ui/Button"
import {
    IconPencil,
    IconTrash,
    IconLock,
    IconBell,
    IconPalette,
    IconDownload,
    IconHistory,
    IconHelpCircle,
    IconCalendarEvent,
    IconShieldCheck,
    IconClock,
    IconChevronRight,
} from "@tabler/icons-react"

export default function UserSettingsPage() {
    return (
        <div className="w-full">
            <div className="flex w-full flex-col gap-5 pb-10">

                {/* Profile Overview */}
                <div className="w-full bg-white rounded-sm shadow-sm px-5 py-3 flex flex-col gap-4">
                    <header className="border-b border-slate-300">
                        <h1 className="font-semibold text-slate-700 text-lg">Profile Overview</h1>
                    </header>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center">
                                <p className="text-white text-2xl font-semibold">N</p>
                            </div>
                            <div className="">
                                <p className="font-semibold text-slate-700">Nick Admin</p>
                                <p className="text-sm text-slate-500">nickadmin@example.com</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto">
                            <div className="flex items-center gap-3 rounded-sm border border-slate-200 bg-slate-50 px-4 py-2.5">
                                <div className="w-9 h-9 rounded-sm bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                    <IconCalendarEvent size={18} />
                                </div>
                                <div className="">
                                    <p className="text-xs text-slate-500">Member Since</p>
                                    <p className="text-sm font-semibold text-slate-700">May 12, 2024</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-sm border border-slate-200 bg-slate-50 px-4 py-2.5">
                                <div className="w-9 h-9 rounded-sm bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                                    <IconShieldCheck size={18} />
                                </div>
                                <div className="">
                                    <p className="text-xs text-slate-500">Account Status</p>
                                    <p className="text-sm font-semibold text-slate-700">Active</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-sm border border-slate-200 bg-slate-50 px-4 py-2.5">
                                <div className="w-9 h-9 rounded-sm bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                                    <IconClock size={18} />
                                </div>
                                <div className="">
                                    <p className="text-xs text-slate-500">Last Login</p>
                                    <p className="text-sm font-semibold text-slate-700">2 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Settings & Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="lg:col-span-2 w-full bg-white rounded-sm shadow-sm px-5 py-3 flex flex-col gap-4 h-fit">
                        <header className="border-b border-slate-300">
                            <h1 className="font-semibold text-slate-700 text-lg">Account Settings</h1>
                        </header>

                        <div className="flex flex-col divide-y divide-slate-200">
                            <div className="flex items-center justify-between gap-4 py-3 first:pt-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-sm bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                        <IconPencil size={20} />
                                    </div>
                                    <div className="">
                                        <p className="font-semibold text-sm text-slate-700">Edit Profile</p>
                                        <p className="text-sm text-slate-500">Update your name, email, and profile information</p>
                                    </div>
                                </div>
                                <Button label="Update" type="button" variant="secondary" icon={<IconPencil size={18} />} />
                            </div>

                            <div className="flex items-center justify-between gap-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-sm bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                                        <IconLock size={20} />
                                    </div>
                                    <div className="">
                                        <p className="font-semibold text-sm text-slate-700">Change Password</p>
                                        <p className="text-sm text-slate-500">Update your password to keep your account secure</p>
                                    </div>
                                </div>
                                <Button label="Change" type="button" variant="secondary" icon={<IconPencil size={18} />} />
                            </div>

                            <div className="flex items-center justify-between gap-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-sm bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                                        <IconBell size={20} />
                                    </div>
                                    <div className="">
                                        <p className="font-semibold text-sm text-slate-700">Notification Preferences</p>
                                        <p className="text-sm text-slate-500">Manage how you receive notifications</p>
                                    </div>
                                </div>
                                <Button label="Manage" type="button" variant="secondary" icon={<IconPencil size={18} />} />
                            </div>

                            <div className="flex items-center justify-between gap-4 py-3 last:pb-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-sm bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                                        <IconPalette size={20} />
                                    </div>
                                    <div className="">
                                        <p className="font-semibold text-sm text-slate-700">Appearance</p>
                                        <p className="text-sm text-slate-500">Customize your dashboard experience</p>
                                    </div>
                                </div>
                                <Button label="Customize" type="button" variant="secondary" icon={<IconPencil size={18} />} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 h-fit">
                        <div className="w-full bg-white rounded-sm shadow-sm px-5 py-3 flex flex-col gap-4">
                            <header className="border-b border-slate-300">
                                <h1 className="font-semibold text-slate-700 text-lg">Quick Actions</h1>
                            </header>

                            <div className="flex flex-col divide-y divide-slate-200">
                                <button type="button" className="flex items-center justify-between gap-4 py-3 first:pt-0 text-left hover:opacity-80 transition-opacity">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-sm bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                                            <IconDownload size={20} />
                                        </div>
                                        <div className="">
                                            <p className="font-semibold text-sm text-slate-700">Export My Data</p>
                                            <p className="text-sm text-slate-500">Download your data and reports</p>
                                        </div>
                                    </div>
                                    <IconChevronRight size={18} className="text-slate-400 shrink-0" />
                                </button>

                                <button type="button" className="flex items-center justify-between gap-4 py-3 text-left hover:opacity-80 transition-opacity">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-sm bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                                            <IconHistory size={20} />
                                        </div>
                                        <div className="">
                                            <p className="font-semibold text-sm text-slate-700">Activity Log</p>
                                            <p className="text-sm text-slate-500">View recent account activity</p>
                                        </div>
                                    </div>
                                    <IconChevronRight size={18} className="text-slate-400 shrink-0" />
                                </button>

                                <button type="button" className="flex items-center justify-between gap-4 py-3 last:pb-0 text-left hover:opacity-80 transition-opacity">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-sm bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                                            <IconHelpCircle size={20} />
                                        </div>
                                        <div className="">
                                            <p className="font-semibold text-sm text-slate-700">Help &amp; Support</p>
                                            <p className="text-sm text-slate-500">Get help and contact support</p>
                                        </div>
                                    </div>
                                    <IconChevronRight size={18} className="text-slate-400 shrink-0" />
                                </button>
                            </div>
                        </div>

                        <div className="w-full bg-white rounded-sm shadow-sm border border-red-200 px-5 py-3 flex flex-col gap-4">
                            <header className="border-b border-red-200">
                                <h1 className="font-semibold text-red-600 text-lg">Danger Zone</h1>
                            </header>

                            <div className="flex items-center justify-between gap-4">
                                <div className="">
                                    <p className="font-semibold text-sm text-slate-700">Delete Account</p>
                                    <p className="text-sm text-slate-500">Permanently delete your account and all associated data.</p>
                                </div>
                                <Button label="Delete" type="button" variant="secondary-red" icon={<IconTrash size={18} />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}