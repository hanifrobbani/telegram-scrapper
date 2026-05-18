export interface registerUser {
    name: string
    email: string
    password: string
}

export interface registerUserRespond {
    message: string
    data: {
        id: string
        name: string
        email: string
    },
}

export interface loginUser {
    email: string
    password: string
}

export interface loginUserRespond {
    message: string
}