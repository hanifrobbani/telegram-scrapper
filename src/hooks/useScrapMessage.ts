import { useMutation } from '@tanstack/react-query'
import { DataScrapperType, DataScrapperRespond, DataScrapperSaveRespond } from "@/types/scrap.type"
import { ShowToast } from "@/types/toaster.type"

export const useScrapMessageMutation = (showToast: ShowToast) => {
    const { mutate, isPending, isError, error, data } = useMutation<DataScrapperRespond, Error, DataScrapperType>({
        mutationFn: (data) => fetch('/api/telegram/scrap-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()),

        onSuccess: (data) => {
            showToast("success", data.message)
        }, onError: (error) => {
            showToast("error", error.message)
        }

    })

    return { scrap: mutate, isScrappingPending: isPending, isScrappingError: isError, scrappingError: error, scrapResult: data }
}

export const useSaveScrapMessage = (showToast: ShowToast) => {

    const { mutate, isPending, isError, error } = useMutation<DataScrapperSaveRespond, Error, DataScrapperRespond>({
        mutationFn: async (data) => {
            const res = await fetch('/api/telegram/scrap-message/save', {
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
            showToast("success", data.message)
        }, onError: (error) => {
            showToast("error", error.message)
        }

    })
    return { saveScrapData: mutate, isSaveScrapDataPending: isPending, isSaveScrapDataError: isError, saveScrapDataError: error }

}