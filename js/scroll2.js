// 스크롤에 따라 nav 위치 변경
document.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    let nav = document.querySelector('.nav');
    if (scroll > 40) nav.classList.add('fixed')
    else if (scroll < 39) nav.classList.remove('fixed')
});

// nav 클릭시 스크롤애니메이션
const section2Top = document.querySelector('.sec02').offsetTop;
const section3Top = document.querySelector('.sec03').offsetTop;
const 햄버거 = document.querySelector('#collapsible')
const nav = document.querySelectorAll(".nav a")
nav[1].addEventListener('click', function(e){
    e.preventDefault()//기본버튼 클릭막기
    window.scrollTo({
        top:section2Top,
        left: 0,
        behavior: "smooth"
    });
    햄버거.checked = false;
})
nav[2].addEventListener('click', function(e){
    e.preventDefault()//기본버튼 클릭막기
    window.scrollTo({
        top:section3Top,
        left: 0,
        behavior: "smooth"
    });
    햄버거.checked = false;
})