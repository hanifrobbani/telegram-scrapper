import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { formTelegramGroup, telegramGroupRespond } from "@/types/telegram.type"
import { useState } from 'react'

export const useGetTeleGroup = () => {
    const getTelegramGroup = useQuery<formTelegramGroup[]>({
        queryKey: ['telegram_group'],
        queryFn: () => fetch('/api/telegram/group').then((res) => res.json()),
    })

    return getTelegramGroup
}

export const useTelegramGroupMutation = () => {
    const [toaster, setToaster] = useState<{
        isOpen: boolean
        type: "success" | "error"
        message: string
    }>({ isOpen: false, type: "success", message: "" })

    const queryClient = useQueryClient()

     const { mutate, isPending, isError, error } = useMutation<telegramGroupRespond, Error, formTelegramGroup>({
        mutationFn: (data) => fetch('/api/telegram/group', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()),

        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['telegram_group'] })
            
            setToaster({ isOpen: true, type: "success", message: data.message })
        }, onError: (error) => {
            setToaster({ isOpen: true, type: "error", message: error.message })
        }

    })

    return { mutate, isPending, isError, error, toaster, setToaster}
}