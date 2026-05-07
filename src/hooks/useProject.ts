import { useQuery } from '@tanstack/react-query'
import { formTelegramProject } from "@/types/telegram.type"

export const useGetProject = () => {
    const getProjects = useQuery<formTelegramProject[]>({
        queryKey: ['projects'],
        queryFn: () => fetch('/api/projects').then((res) => res.json()),
    })

    return getProjects
}