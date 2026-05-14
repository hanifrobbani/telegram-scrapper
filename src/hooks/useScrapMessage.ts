import { useMutation } from '@tanstack/react-query'
import { DataScrapperType, DataScrapperRespond } from "@/types/scrap.type"

export const useScrapMessageMutation = () => {
    const { mutate, isPending, isError, error, data } = useMutation<DataScrapperRespond, Error, DataScrapperType>({
        mutationFn: (data) => fetch('/api/telegram/scrap-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()),

        onSuccess: (data) => {
            console.log("success", data)
        }, onError: (error) => {
            console.log("error", error)
        }

    })

    return {mutate, isPending, isError, error, data}
}