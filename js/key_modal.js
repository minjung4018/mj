const opens = document.querySelectorAll(".swiper-slide .theme")
const boxs = document.querySelectorAll(".modal-box")
const closes = document.querySelectorAll(".modal-box .close")

// 각 테마를 클릭하면
Array.from(opens).forEach((open, index) => {
    open.addEventListener("click", function () {
        boxs[index].classList.add('active')
        opens[index].classList.add('active')

        // 이미 열린상태에서 배경클릭시 닫힘
        Array.from(boxs).forEach((box) => {
            // 각 박스들 배열에서 각박스한테 클릭이벤트를준다
            box.addEventListener('click', function (e){
                e.stopPropagation() // 버블링 막기()
                if(e.target == e.currentTarget){
                    // 이벤트가 일어나는 애랑 내가 누른애랑 같으면, 버블링 막기가 되어서 .modal-box클릭했지만 .modal-contents를 클릭한게 아님.
                    for(let box of boxs){ box.classList.remove('active')}
                }
            })
        })
        // x버튼 클릭시 닫힘
        Array.from(closes).forEach((close) => {
            // 각 x버튼들 배열에서 각 x버튼한테 클릭이벤트를준다
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
