export const getRecentDays = (date, days) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate() - days}`
}