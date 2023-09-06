const text = document.querySelector("#text");
const searchBtn = document.querySelector(".search button");
// console.log(text.value)
const after = document.querySelector(".after");
const work = document.querySelector(".works");
const search = document.querySelector(".search");
const contact = document.querySelector(".contact");
const keyword = document.querySelector(".keyword");
const index = document.querySelector(".index");



function viewProfile() {
    if (text.value == `박민정`) {
        after.classList.add("on");
        work.classList.add("on");
        search.classList.add("on");
        contact.classList.add("on");
        keyword.classList.add("on");
        index.classList.add("on");
    }
    else {
        alert("박민정을 검색해주세요");
    }
}

// 검색 인풋 이벤트
search.querySelector('input').addEventListener("keypress", e => {
    if (e.key === 'Enter' && e.target.value.length !== 0) {
        // 뭐라도 한 자 이상 입력하고 엔터를 눌렀을 때
        viewProfile()

        // 새로고침
        // location.reload();
    }
});
// 검색버튼 이벤트
searchBtn.addEventListener("click", viewProfile);

const btns = document.querySelectorAll(".btns button");
const items = document.querySelectorAll(".work");
Array.from(btns).forEach((btn, index) => {
    btn.addEventListener("click", function () {
        for (item of items) { item.classList.remove('on'); }
        for (btn of btns) { btn.classList.remove('on'); }
        btns[index].classList.add("on");
        items[index].classList.add("on");
    });
});
btns[0].click();