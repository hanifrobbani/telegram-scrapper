export interface telegramProjectRespond{
    message: string;
    status: number
    data: {
        url_project: string;
        project_name: string;
        type: string;
    }[]
}
export interface formTelegramProject{
    url_project: string;
    project_name: string;
    type: string;
}

export interface telegramGroupRespond{
    message: string
    status: number
    data: {
        url_group: string
        title: string
    }[]
}
export interface formTelegramGroup{
    id?: string;
    title: string;
    url_group: string;
}