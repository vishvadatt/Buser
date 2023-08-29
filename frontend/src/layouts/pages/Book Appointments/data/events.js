
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

console.log("dateTime", todayStr + 'T16:00:00')
export const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: 'All-day event',
        start: todayStr
    },
    {
        id: createEventId(),
        title: 'Timed event',
        start: todayStr + 'T12:00:00'
    },
    {
        id: createEventId(),
        title: 'Meeting',
        start: todayStr + 'T16:00:00'
    }
]

export function createEventId() {
    return String(eventGuid++)
}
