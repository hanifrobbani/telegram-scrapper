'use client'
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import Image from "next/image"
import { IconMail, IconMessage, IconBrandTelegram } from "@tabler/icons-react"
import { useRouter } from 'next/navigation';

export default function RequestAccess() {
    const router = useRouter()
    return (
        <div className="flex justify-between min-h-screen w-full">
            <div className="w-full bg-linear-to-t from-blue-900 to-gray-800 p-10 flex flex-col justify-between items-center">
                <div className="w-full h-full flex flex-col justify-between items-center">
                    <div className="w-full max-w-md flex gap-4 py-3 justify-center">
                        <Image src={'/telegram.png'} width={45} height={45} alt="telegram icon" className="object-contain" />

                        <div className="flex-1">
                            <h1 className="text-lg font-semibold text-white">Telegram scrapper</h1>
                            <p className="text-sm text-slate-400">Track data announcemment from public telegram group.</p>
                        </div>
                    </div>

                    <div className="w-full max-w-md flex flex-col">
                        <h1 className="text-4xl font-bold text-white">Request Access.</h1>
                        <h1 className="text-4xl font-bold text-white">Let's Get You Started.</h1>

                        <p className="text-slate-400">Submit your request and we will review it. We'll get back to you as soon as possible</p>
                    </div>
                </div>

                <Image src={'/req-access-img.png'} width={400} height={400} alt="telegram page image" />
            </div>
            <div className="w-full flex flex-col p-10 justify-center items-center">
                <div className="text-center w-full">
                    <h1 className="font-semibold text-2xl">Request Access</h1>
                    <p className="text-slate-600 text-sm">Fill the form below to request the access of this website!</p>
                </div>
                <form className="space-y-3 w-full max-w-md mt-5">
                    <div className="w-full">
                        <label htmlFor="" className="text-sm text-slate-600">Email</label>
                        <Input
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            // onChange={handleChange}
                            icon={<IconMail size={20} />}
                            required
                            size="large"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="" className="text-sm text-slate-600">Message</label>
                        <div className={`flex gap-2 w-full rounded-md border border-slate-400 focus-within:ring-blue-500 bg-white text-slate-700 outline-none focus-within:ring-2 focus-within:border-transparent px-3 py-1.5 text-sm`}>
                            <span className="text-slate-400">{<IconMessage size={24} />}</span>

                            <textarea name="" placeholder="Tell us why you need to access this website!" className="w-full bg-transparent outline-none placeholder:text-slate-400 disabled:cursor-not-allowed min-h-20"></textarea>
                        </div>
                    </div>
                    <div className="w-full">
                        <Button
                            type="submit"
                            variant="primary"
                            label="Submit Request"
                            icon={<IconBrandTelegram size={24} />}
                            className="w-full"
                            size="large"
                        // loadingType={isPending}
                        />
                    </div>
                </form>
                <div className="w-full text-sm text-center mt-10">
                    <p className="text-slate-600">Already have an access? <a onClick={() => router.push('/login')} className="text-blue-600 hover:underline cursor-pointer">Sign In</a></p>
                </div>
            </div>

        </div>
    )
}