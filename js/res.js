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