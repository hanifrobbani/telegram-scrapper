'use client'
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import Image from "next/image"
import { IconMail, IconMessage, IconBrandTelegram, IconCheckFilled, IconArrowNarrowLeft } from "@tabler/icons-react"
import { useRouter } from 'next/navigation';
import { useReqAccessMutation } from "@/hooks/useRequestAccess"
import { useState } from "react"
import Toaster from "@/components/ui/modalToaster"

export default function RequestAccess() {
    const { mutate, isPending, isError, isSuccess, toaster, setToaster } = useReqAccessMutation()
    const [request, setRequest] = useState({ email: '', message: '' })
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRequest(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutate(request)
    }

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
            {!isError && isSuccess ? (
                <div className="w-full flex flex-col p-10 justify-center items-center gap-5">
                    <div className="flex flex-col items-center gap-3">
                        <div className="inline-flex p-4 bg-green-200 rounded-full text-green-600">
                            <IconCheckFilled size={60} stroke={2} />
                        </div>
                        <div className="text-center max-w-md">
                            <h1 className="font-semibold text-2xl">Request Submitted!</h1>
                            <p className="text-slate-500">Thank You! your access request has been submitted successfully</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-5">
                        <div className="bg-green-100 text-slate-800 flex items-center gap-3 w-full max-w-sm p-4 rounded-xl">
                            <div className="text-green-600 bg-green-300 p-2 rounded-full">
                                <IconMail size={30} />
                            </div>
                            <div className="">
                                <h1 className="font-semibold">What happends next?</h1>
                                <p className="text-sm">We'll review your request and get back to you as soon as possible via email, make sure to stay updated!</p>
                            </div>
                        </div>
                        <div className="w-full max-w-sm flex justify-center">
                            <Button
                                label="Back to login"
                                type="button"
                                variant="secondary"
                                className="w-full"
                                size="large"
                                icon={<IconArrowNarrowLeft size={24} stroke={2}/>}
                                onClick={() => router.push('/login')}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full flex flex-col p-10 justify-center items-center">
                    <div className="text-center w-full">
                        <h1 className="font-semibold text-2xl">Request Access</h1>
                        <p className="text-slate-600 text-sm">Fill the form below to request the access of this website!</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-md mt-5">
                        <div className="w-full">
                            <label htmlFor="" className="text-sm text-slate-600">Email</label>
                            <Input
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                                onChange={handleChange}
                                icon={<IconMail size={20} />}
                                required
                                size="large"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="" className="text-sm text-slate-600">Message</label>
                            <div className={`flex gap-2 w-full rounded-md border border-slate-400 focus-within:ring-blue-500 bg-white text-slate-700 outline-none focus-within:ring-2 focus-within:border-transparent px-3 py-1.5 text-sm`}>
                                <span className="text-slate-400">{<IconMessage size={24} />}</span>

                                <textarea name="message" onChange={handleChange} placeholder="Tell us why you need to access this website!" className="w-full bg-transparent outline-none placeholder:text-slate-400 disabled:cursor-not-allowed min-h-20 max-h-60"></textarea>
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
                                loadingType={isPending}
                            />
                        </div>
                    </form>
                    <div className="w-full text-sm text-center mt-10">
                        <p className="text-slate-600">Already have an access? <a onClick={() => router.push('/login')} className="text-blue-600 hover:underline cursor-pointer">Sign In</a></p>
                    </div>
                </div>
            )}

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