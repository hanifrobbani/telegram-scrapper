import { useMutation } from '@tanstack/react-query'
import { requestAccess, requestAccessRespond } from '@/types/requestAccess.type'
import { useState } from 'react'

export const useReqAccessMutation = () => {
    const [toaster, setToaster] = useState<{
        isOpen: boolean
        type: "success" | "error"
        message: string
    }>({ isOpen: false, type: "success", message: "" })
    const { mutate, isPending, isError, isSuccess } = useMutation<requestAccessRespond, Error, requestAccess>({
        mutationFn: async (data) => {
            const res = await fetch('/api/auth/req-access', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json()
            if (!res.ok) {
                throw new Error(result.error)
            }

            return result
        },
        onMutate: () => {
            setToaster({ isOpen: false, type: "error", message: "" })
        },

        onSuccess: (data) => {
            setToaster({ isOpen: true, type: "success", message: data.message })
        }, onError: (error) => {
            setToaster({ isOpen: true, type: "error", message: error.message })
        }
    })

    return {mutate, isPending, isError, isSuccess, toaster, setToaster}
}