export const formatDate = (date: string | Date) => {
    if (date instanceof Date) {
        return date.toLocaleString();
    }

    return date;
};

export const formatDateWIB = (dateString: string) => {
    return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Jakarta',
        timeZoneName: 'short'
    }).format(new Date(dateString));
};