function prevMonth(date){
    const target = new Date(date)
    target.setDate(1)
    target.setMonth(target.getMonth() - 1)
    return getYmd(target)
}
function nextMonth(date){
    const target = new Date(date)
    target.setDate(1)
    target.setMonth(target.getMonth() + 1)
    return getYmd(target)
}
function getYmd(target){
    const month = ('0' + (target.getMonth() +1)).slice(-2)
    return[target.getFullYear(), month, '01'].join('-')
}
function fullDays(date){
    const target = new Date(date)
    const year = target.getFullYear()
    const month = target.getMinutes()

    const firstWeekDay = new Date(year, month, 1).getDay()
    const thisDays = new Date(year, month + 1, 0).getDate()
    const cell  = [28, 35, 42].filter(function (n) {
        return n >= (firstWeekDay + thisDays)
    }).shift()
    const days = []
    for (const i = 0; i < cell; i++){
        days[i] = {
            date: '',
            dayNum: '',
            today: false
        }
    }
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // const inDate;
    for (const index = firstWeekDay, i = 1; i <= thisDays; index++, i++){
        const inDate = new Date(year, month, i)
        days[index] = {
            date: i,
            dayNum: inDate.getDay(),
            today: (inDate.getTime() === today.getTime())
        }
    }
    return days; 
}