export const truncateText = (text: string, limit: number = 50) => {
    return text.length > limit
        ? text.slice(0, limit) + '...'
        : text;
};