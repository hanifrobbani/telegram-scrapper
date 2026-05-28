import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { formTelegramProject, telegramProjectRespond } from "@/types/telegram.type"
import { ShowToast } from "@/types/toaster.type"

export const useGetProject = () => {
    const getProjects = useQuery<formTelegramProject[]>({
        queryKey: ['projects'],
        queryFn: () => fetch('/api/projects').then((res) => res.json()),
    })

    return getProjects
}

export const useAddProjectMutation = (showToast: ShowToast) => {
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

        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
            showToast("success", data.message)
        }, onError: (error) => {
            showToast("error", error.message)
        }

    })

    return { mutate, isPending, isError, error }
}

export const useUpdateProjectMutation = (showToast: ShowToast) => {
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
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
            showToast("success", data.message)
        }, onError: (error) => {
            showToast("error", error.message)
        }

    })

    return { mutate, isPending, isError, error }
}

export const useDeleteProject = (showToast: ShowToast) => {
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

        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
            showToast("success", data.message)
        }, onError: (error) => {
            showToast("error", error.message)
        }

    })
    return { mutate, isPending }

}