export const getRecentDays = (date, days) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}

export const getFormattedDate = (date) => {
    return date.toISOString().slice(0, 10)
}