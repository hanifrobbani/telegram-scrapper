import { useMutation } from '@tanstack/react-query'
import { registerUser, registerUserRespond, loginUser, loginUserRespond } from '@/types/user.type'

export const useRegisterMutation = () => {

    const { mutate, isPending, isError, error } = useMutation<registerUserRespond, Error, registerUser>({
        mutationFn: (data) => fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()),

        onSuccess: (data) => {
            console.log(data.message)

        }, onError: (error) => {
            console.log(error)
        }
    })
    return { mutate, isPending, isError, error }
}


export const useLoginMutation = () => {
    const { mutate, isPending, isError } = useMutation<loginUserRespond, Error, loginUser>({
        mutationFn: (data) => fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()),

        onSuccess: (data) => {
            console.log(data.message)
        }, onError: (error) => {
            console.log(error)
        }
    })

    return {mutate, isPending, isError}
}