import { useEffect, useRef, useState } from "react"

export function useFakeProgress(isLoading: boolean) {
    const [progress, setProgress] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (isLoading) {
            setProgress(10)

            intervalRef.current = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 90) return prev
                    return prev + Math.random() * 8
                })
            }, 300)
        } else {
            setProgress(100)

            const timeout = setTimeout(() => {
                setProgress(0)
            }, 400)

            return () => clearTimeout(timeout)
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [isLoading])

    return progress
}