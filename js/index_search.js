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