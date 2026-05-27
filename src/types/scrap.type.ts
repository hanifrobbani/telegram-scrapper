export interface DataScrapperType {
    channelUrl: string;
    startDate: string;
    endDate: string;
}

export interface ScrapperItem {
    id: string;
    projectName: string;
    date: Date | string;
    text: string;
    type: string;
    replyToId: number;
    messageUrl: string;
    scrapedAt: Date | string;
    groupLink: string;
    entities: [
        {
            className: string;
            offset: number;
            length: number
        }
    ]
}

export interface DataScrapperRespond {
    data: ScrapperItem[];

}
export interface DataScrapperSaveRespond {
    message: string;
    total: number;
}