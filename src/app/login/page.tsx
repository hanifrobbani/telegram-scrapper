'use client'
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import { IconMail, IconLock, IconLogin2 } from "@tabler/icons-react"
import Image from "next/image"

export default function Login() {
    return (
        <div className="flex justify-between min-h-screen w-full">
            <div className="w-full bg-linear-to-t from-blue-900 to-gray-800 p-10 flex flex-col justify-between items-center">
                <div className="w-full h-full flex flex-col justify-between items-center">
                    <div className="w-full max-w-md flex gap-4 py-3 justify-center">
                        <Image src={'/telegram.png'} width={45} height={45} alt="telegram icon" className="object-contain"/>

                        <div className="flex-1">
                            <h1 className="text-lg font-semibold text-white">Telegram scrapper</h1>
                            <p className="text-sm text-slate-400">Track data announcemment from public telegram group.</p>
                        </div>
                    </div>

                    <div className="w-full max-w-md flex flex-col">
                        <h1 className="text-4xl font-bold text-white">Scrape. Track.</h1>
                        <h1 className="text-4xl font-bold text-white">Never Miss Anything.</h1>

                        <p className="text-slate-400">Monitor any projects easily, and get information for free!</p>
                    </div>
                </div>

                <Image src={'/login-image.png'} width={400} height={400} alt="telegram page image" />
            </div>
            <div className="w-full flex flex-col p-10 justify-center items-center">
                <div className="text-center w-full">
                    <h1 className="font-semibold text-2xl">Welcome Back!</h1>
                    <p className="text-slate-600 text-sm">Sign In to your account to continue</p>
                </div>
                <form action="" className="space-y-3 w-full max-w-md mt-5">
                    <div className="w-full">
                        <label htmlFor="" className="text-sm text-slate-600">Email</label>
                        <Input
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            icon={<IconMail size={20} />}
                            required
                            size="large"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="" className="text-sm text-slate-600">Password</label>
                        <Input
                            name="password"
                            placeholder="Enter your password"
                            type="password"
                            icon={<IconLock size={20} />}
                            required
                            size="large"
                        />
                    </div>
                    <div className="w-full">
                        <Button
                            type="submit"
                            variant="primary"
                            label="Sign In"
                            icon={<IconLogin2 size={24} />}
                            className="w-full"
                            size="large"
                        />
                    </div>
                </form>
                <div className="w-full text-sm text-center mt-10">
                    <p className="text-slate-600">Don't have an account? <a href="" className="text-blue-600 hover:underline">Request Access</a></p>
                </div>
            </div>
        </div>
    )
}