import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { formTelegramGroup, telegramGroupRespond } from "@/types/telegram.type"
import { useState } from 'react'
import { ToasterType } from '@/types/toaster.type'

export const useGetTeleGroup = () => {
    const {data, error, isLoading, isError} = useQuery<formTelegramGroup[]>({
        queryKey: ['telegram_group'],
        queryFn: () => fetch('/api/telegram/group').then((res) => res.json()),
    })

    return {telegramGroupData: data, telegramGroupError: error, isTelegramGroupError: isError, isTelegramGroupLoading: isLoading}
}

export const useAddTelegramGroupMutation = () => {
    const [toaster, setToaster] = useState<ToasterType>({ isOpen: false, type: "success", message: "" })

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

    return { mutate, isPending, isError, error, toaster }
}

export const useUpdateTelegramGroupMutation = () => {
    const [toaster, setToaster] = useState<ToasterType>({ isOpen: false, type: "success", message: "" })

    const queryClient = useQueryClient()

    const { mutate, isPending, isError, error } = useMutation<telegramGroupRespond, Error, formTelegramGroup>({
        mutationFn: (data) => fetch('/api/telegram/group', {
            method: 'PUT',
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

    return { mutate, isPending, isError, error, toaster }
}

export const useDeleteTelegramGroup = () => {
    const [toaster, setToaster] = useState<ToasterType>({ isOpen: false, type: "success", message: "" })

    const queryClient = useQueryClient()

    const { mutate, isPending, isError, error } = useMutation<telegramGroupRespond, Error, formTelegramGroup>({
        mutationFn: (data) => fetch('/api/telegram/group', {
            method: 'DELETE',
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
    return { mutate, isPending, isError, error, toaster }

}