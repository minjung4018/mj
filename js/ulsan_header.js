const gnbs = document.querySelector('.inner > ul')
const header = document.querySelector('header')
const texts = document.querySelectorAll('.gnb span')
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
        for(site of sites){ site.classList.remove('on') }
        for(btn of btns){ btn.classList.remove('on') }
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
menu.addEventListener("click", cancelSelection)



let wiw = window.innerWidth;
// 최초 로딩시
if (wiw > 1010) {
    // pc범주
    
    gnbs.addEventListener('mouseenter', () => {
        header.classList.add('white')
        Array.from(texts).forEach(text => {
            text.classList.add('black')
        });
        search.classList.add('black')
        gnbs.addEventListener('mouseleave', () => {
            header.classList.remove('white')
            Array.from(texts).forEach(text => {
                text.classList.remove('black')
            });
            search.classList.remove('black')
        })
    })
} else {
}

// 리사이징할때
window.addEventListener('resize', () => {
    wiw = window.innerWidth;
    console.log(wiw)
    if (wiw > 1010) {
        // pc범주
        gnbs.addEventListener('mouseenter', () => {
            header.classList.add('white')
            Array.from(texts).forEach(text => {
                text.classList.add('black')
            });
            search.classList.add('black')
            gnbs.addEventListener('mouseleave', () => {
                header.classList.remove('white')
                Array.from(texts).forEach(text => {
                    text.classList.remove('black')
                });
                search.classList.remove('black')
            })
        })
       
    }else {
        
    }
});