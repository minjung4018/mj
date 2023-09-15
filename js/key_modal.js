const opens = document.querySelectorAll(".swiper-slide .theme")
const boxs = document.querySelectorAll(".modal-box")
const closes = document.querySelectorAll(".modal-box .close")

// 각 테마를 클릭하면
Array.from(opens).forEach((open, index) => {
    open.addEventListener("click", function () {
        boxs[index].classList.add('active')
        opens[index].classList.add('active')

        Array.from(boxs).forEach((box) => {
            box.addEventListener('click', function (e){
                e.stopPropagation() // 버블링 막기()
                if(e.target == e.currentTarget){
                    for(let box of boxs){ box.classList.remove('active')}
                }
            })
        })
        // x버튼 클릭시 닫힘
        Array.from(closes).forEach((close) => {
            close.addEventListener('click', function (){
                for(let box of boxs){ box.classList.remove('active')}
            })
        })
    })
})



// sec03 지점정보
const btns = document.querySelectorAll(".radio button")
const infos = document.querySelectorAll(".down > div")
Array.from(btns).forEach((btn, index) => {
    btn.addEventListener("click", function () {
        for(info of infos){ info.classList.remove('on') }
        for(btn of btns){ btn.classList.remove('on') }
        btns[index].classList.add("on");
		infos[index].classList.add("on");

        let num = `0${index + 1}`
        let map = new Function(`return map${num}`)()
        map.relayout()
        let x = new Function(`return x_${num}`)()
        let y = new Function(`return y_${num}`)()
        map.setCenter(new kakao.maps.LatLng(x,y))
    })
})
btns[0].click()
