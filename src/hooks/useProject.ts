import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { formTelegramProject, telegramProjectRespond } from "@/types/telegram.type"
import { useState } from 'react'
import { ToasterType } from '@/types/toaster.type'

export const useGetProject = () => {
    const getProjects = useQuery<formTelegramProject[]>({
        queryKey: ['projects'],
        queryFn: () => fetch('/api/projects').then((res) => res.json()),
    })

    return getProjects
}

export const useAddProjectMutation = () => {
    const [toaster, setToaster] = useState<{
        isOpen: boolean
        type: "success" | "error"
        message: string
    }>({ isOpen: false, type: "success", message: "" })

    const queryClient = useQueryClient()

    const { mutate, isPending, isError, error } = useMutation<telegramProjectRespond, Error, formTelegramProject>({
        mutationFn: async (data) => {
            const res = await fetch('/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json()
            if (!res.ok) {
                throw new Error(result.message)
            }

            return result
        },
        onMutate: () => {
            setToaster({ isOpen: false, type: "success", message: "" })
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })

            setToaster({ isOpen: true, type: "success", message: data.message })
        }, onError: (error) => {
            setToaster({ isOpen: true, type: "error", message: error.message })
        }

    })

    return { mutate, isPending, isError, error, toaster, setToaster }
}

export const useUpdateProjectMutation = () => {
    const [toaster, setToaster] = useState<ToasterType>({ isOpen: false, type: "success", message: "" })

    const queryClient = useQueryClient()

    const { mutate, isPending, isError, error } = useMutation<telegramProjectRespond, Error, formTelegramProject>({
        mutationFn: async (data) => {
            const res = await fetch('/api/projects', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json()
            if (!res.ok) {
                throw new Error(result.message)
            }

            return result
        },
        onMutate: () => {
            setToaster({ isOpen: false, type: "success", message: "" })
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })

            setToaster({ isOpen: true, type: "success", message: data.message })
        }, onError: (error) => {
            setToaster({ isOpen: true, type: "error", message: error.message })
        }

    })

    return { mutate, isPending, isError, error, toaster }
}

export const useDeleteProject = () => {
    const [toaster, setToaster] = useState<ToasterType>({ isOpen: false, type: "success", message: "" })

    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation<telegramProjectRespond, Error, formTelegramProject>({
        mutationFn: async (data) => {
            const res = await fetch('/api/projects', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await res.json()
            if (!res.ok) {
                throw new Error(result.message)
            }

            return result
        },
        onMutate: () => {
            setToaster({ isOpen: false, type: "success", message: "" })
        },


        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })

            setToaster({ isOpen: true, type: "success", message: data.message })
        }, onError: (error) => {
            setToaster({ isOpen: true, type: "error", message: error.message })
        }

    })
    return { mutate, isPending, toaster }

}