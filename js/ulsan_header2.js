const gnbs = document.querySelector('.inner > ul')
const header = document.querySelector('header')
const texts = document.querySelectorAll('.gnb span')
let wiw = window.innerWidth;
// 대메뉴에 호버시 헤더 컬러 변경 함수
function headerColor(){
    gnbs.addEventListener('mouseenter', () => {
        header.classList.add('white')
        for (const text of texts) { text.classList.add('black') }
        search.classList.add('black')
        gnbs.addEventListener('mouseleave', () => {
            header.classList.remove('white')
            for (const text of texts) { text.classList.remove('black') }
            search.classList.remove('black')
        })
    })
}

const search = document.querySelector('.search')
const open = document.querySelector('.inner > label')
document.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    if (scroll > 250){
        header.classList.add('white')
        Array.from(texts).forEach(text => {
            text.classList.add('black')
        });
        open.classList.add('black')
        search.classList.add('black')
    }
    else if (scroll < 249){
        header.classList.remove('white')
        Array.from(texts).forEach(text => {
            text.classList.remove('black')
        });
        open.classList.remove('black')
        search.classList.remove('black')    
    }
})

const btns = document.querySelectorAll('.up button')
const sites = document.querySelectorAll('.sitetab')
Array.from(btns).forEach((btn, index) => {
    btn.addEventListener("click", function () {
        for(let site of sites){ site.classList.remove('on') }
        for(let btn of btns){ btn.classList.remove('on') }
        btns[index].classList.add("on");
		sites[index].classList.add("on");
        
    })
})
const menu = document.querySelector('#collapsible')
const check1 = document.querySelector('#tab_menu')
const check2 = document.querySelector('#tab_menu2')
const check3 = document.querySelector('#tab_menu3')
const check4 = document.querySelector('#tab_menu4')
function cancelSelection() {   
    if(!menu.cheked){
        check1.checked = false;
        check2.checked = false;
        check3.checked = false;
        check4.checked = false;
    }
}





// 최초 로딩시
if (wiw > 1010) {
    // pc범주
    headerColor()
} else {
}

// 리사이징할때
window.addEventListener('resize', (e) => {
    console.log(e)
    if(e.innerWidth > 1010){
        headerColor()
    }
});