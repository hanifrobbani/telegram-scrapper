export interface requestAccess {
    email: string;
    message: string;
}

export interface requestAccessRespond {
    message: string;
    data: {
        id: string;
        email: string;
        message: string;
    },
}