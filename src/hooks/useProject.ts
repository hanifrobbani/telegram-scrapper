import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { formTelegramProject, telegramProjectRespond } from "@/types/telegram.type"
import { useState } from 'react'

export const useGetProject = () => {
    const getProjects = useQuery<formTelegramProject[]>({
        queryKey: ['projects'],
        queryFn: () => fetch('/api/projects').then((res) => res.json()),
    })

    return getProjects
}

export const useProjectMutation = () => {
    const [toaster, setToaster] = useState<{
        isOpen: boolean
        type: "success" | "error"
        message: string
    }>({ isOpen: false, type: "success", message: "" })

    const queryClient = useQueryClient()

     const { mutate, isPending, isError, error } = useMutation<telegramProjectRespond, Error, formTelegramProject>({
        mutationFn: (data) => fetch('/api/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()),

        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
            
            setToaster({ isOpen: true, type: "success", message: data.message })
        }, onError: (error) => {
            setToaster({ isOpen: true, type: "error", message: error.message })
        }

    })

    return { mutate, isPending, isError, error, toaster, setToaster}
}