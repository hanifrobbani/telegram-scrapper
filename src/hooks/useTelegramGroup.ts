import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { formTelegramGroup, telegramGroupRespond } from "@/types/telegram.type"
import { ShowToast } from "@/types/toaster.type"

export const useGetTeleGroup = () => {
    const { data, error, isLoading, isError } = useQuery<formTelegramGroup[]>({
        queryKey: ['telegram_group'],
        queryFn: () => fetch('/api/telegram/group').then((res) => res.json()),
    })

    return { telegramGroupData: data, telegramGroupError: error, isTelegramGroupError: isError, isTelegramGroupLoading: isLoading }
}

export const useAddTelegramGroupMutation = (showToast: ShowToast) => {
    const queryClient = useQueryClient()

    const { mutate, isPending, isError, error } = useMutation<telegramGroupRespond, Error, formTelegramGroup>({
        mutationFn: async (data) => {
            const res = await fetch('/api/telegram/group', {
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

export const useUpdateTelegramGroupMutation = (showToast: ShowToast) => {
    const queryClient = useQueryClient()

    const { mutate, isPending, isError, error } = useMutation<telegramGroupRespond, Error, formTelegramGroup>({
        mutationFn: async (data) => {
            const res = await fetch('/api/telegram/group', {
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

export const useDeleteTelegramGroup = (showToast: ShowToast) => {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation<telegramGroupRespond, Error, formTelegramGroup>({
        mutationFn: async (data) => {
            const res = await fetch('/api/telegram/group', {
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