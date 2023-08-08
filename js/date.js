// 풀캘린더사이트
document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.querySelector('#calendar');
    let cal = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            start: '',
            center: 'title',
            end: ''
        },
        titleFormat: {
            month: '2-digit',
            year: 'numeric',
        },
        weekday: 'narrow',
        initialView: 'dayGridMonth',
        fixedWeekCount: false, // 6줄 고정 풀기
        validRange(nowDate) { // 예약 가능한 날짜
            let startDate = endDate = nowDate;
            return {
                start: startDate.setDate(startDate.getDate()), // 오늘로부터
                end: endDate.setDate(endDate.getDate() + 13) // 2주후
            };
        },
        dateClick(e) { // 클릭하면 출력
            console.log(e.date.getDate() + '일을 선택하였습니다');
            let validDays = document.querySelectorAll('#calendar .fc-daygrid-day');
            for (const day of validDays) day.classList.remove("select");
            e.dayEl.classList.add("select");
        },
    });
    cal.render();
});