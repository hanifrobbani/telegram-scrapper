import { useQuery } from '@tanstack/react-query'
import { formTelegramGroup } from "@/types/telegram.type"

export const useGetTeleGroup = () => {
    const getTelegramGroup = useQuery<formTelegramGroup[]>({
        queryKey: ['telegram_group'],
        queryFn: () => fetch('/api/telegram/group').then((res) => res.json()),
    })

    return getTelegramGroup
}