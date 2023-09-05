const text = document.querySelector("#text")
const btn = document.querySelector("button")
console.log(text.value)

btn.addEventListener("click", function(){
    if(text.value == `박민정`){
        const after = document.querySelector(".after")
        const work = document.querySelector(".works")
        const search = document.querySelector(".search")
        after.classList.add("on")
        work.classList.add("on")
        search.classList.add("on")
    }
    else{
        alert("박민정을 검색해주세요")
    }
})

const btns = document.querySelectorAll(".btns button")
const works = document.querySelectorAll(".work")
Array.from(btns).forEach((btn, index) => {
    btn.addEventListener("click", function () {
        for(work of works){ work.classList.remove('on') }
        for(btn of btns){ btn.classList.remove('on') }
        btns[index].classList.add("on");
		works[index].classList.add("on");
    })
})
btns[0].click()