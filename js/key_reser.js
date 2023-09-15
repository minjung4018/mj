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
        fixedWeekCount: false, 
        validRange(nowDate) { // 예약 가능한 날짜
            let startDate = endDate = nowDate;
            return {
                start: startDate.setDate(startDate.getDate()),
                end: endDate.setDate(endDate.getDate() + 13) 
            };
        },
        dateClick(e) {
            console.log(e.date.getDate() + '일을 선택하였습니다');
            let validDays = document.querySelectorAll('#calendar .fc-daygrid-day');
            for (const day of validDays) day.classList.remove("select");
            e.dayEl.classList.add("select");
        },
    });
    cal.render();
});
const btns = document.querySelectorAll(".theme input")
const ress = document.querySelectorAll(".themeinfo")
Array.from(btns).forEach((btn, index) => {
    btn.addEventListener("click", function () {
        for(res of ress){ res.classList.remove('on') }
        for(btn of btns){ btn.classList.remove('on') }
        btns[index].classList.add("on");
		ress[index].classList.add("on");
    })
})
btns[0].click()
const times = document.querySelectorAll('.resbtn')
Array.from(times).forEach((time) => {
    time.addEventListener("click", function() {
        alert(`포트폴리오용 예약화면입니다.`)
    })

})