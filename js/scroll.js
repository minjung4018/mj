// 윈도우 설정 > 접근성 > 디스플레이 > windows에서 애니메이션 표시 켜기

document.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    let nav = document.querySelector('.nav')
    if (scroll > 40) nav.classList.add('fixed')
    else if (scroll < 39) nav.classList.remove('fixed')
})
const sec1Top = document.querySelector('header').offsetTop;
const sec2Top = document.querySelector('.sec02').offsetTop;
const sec3Top = document.querySelector('.sec03').offsetTop;
const 햄버거 = document.querySelector('#collapsible')
const nav = document.querySelectorAll(".nav a")
nav[0].addEventListener('click', function(e){
    e.preventDefault()//기본버튼 클릭막기
    window.scrollTo({
        top:sec1Top,
        left: 0,
        behavior: "smooth"
    });
})
nav[1].addEventListener('click', function(e){
    e.preventDefault()
    window.scrollTo({
        top:sec2Top,
        left: 0,
        behavior: "smooth"
    });
    햄버거.checked = false;
})
nav[2].addEventListener('click', function(e){
    e.preventDefault()
    window.scrollTo({
        top:sec3Top,
        left: 0,
        behavior: "smooth"
    });
    햄버거.checked = false;
})