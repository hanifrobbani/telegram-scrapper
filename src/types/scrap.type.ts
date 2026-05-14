export interface DataScrapperType {
    channelUrl: string;
    startDate: string;
    endDate: string;
}

export interface DataScrapperRespond {
    data: {
        id: number;
        projectName: string;
        date: Date | string;
        text: string;
        replyToId: boolean;
        entities: [
            {
                className: string;
                offset: number;
                length: number
            }
        ]
    }[]
}