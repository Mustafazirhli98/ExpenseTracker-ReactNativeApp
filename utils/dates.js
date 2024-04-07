export const getRecentDays = (date, days) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1)
}

export const getFormattedDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}