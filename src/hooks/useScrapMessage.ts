import { useMutation } from '@tanstack/react-query'
import { DataScrapperType, DataScrapperRespond } from "@/types/scrap.type"
import { useState } from 'react'

export const useScrapMessageMutation = () => {
    const [toaster, setToaster] = useState<{
            isOpen: boolean
            type: "success" | "error"
            message: string
        }>({ isOpen: false, type: "success", message: "" })
    
    const { mutate, isPending, isError, error, data } = useMutation<DataScrapperRespond, Error, DataScrapperType>({
        mutationFn: (data) => fetch('/api/telegram/scrap-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()),

        onSuccess: () => {
            setToaster({ isOpen: true, type: "success", message: "Data scraped successfully!" })
        }, onError: (error) => {
            setToaster({ isOpen: true, type: "success", message: error.message })
        }

    })

    return {mutate, isPending, isError, error, data, toaster, setToaster}
}