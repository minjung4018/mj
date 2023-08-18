const gnbs = document.querySelector('.inner > ul');
const header = document.querySelector('header');
let wiw = window.innerWidth;
function headerColor() {
    wiw = window.innerWidth;
    gnbs.addEventListener('mouseenter', () => {
        if (wiw > 1010) {
            header.classList.add('white');
            gnbs.addEventListener('mouseleave', () => {
                header.classList.remove('white');
            });
        }
        else return false;
    });
}
const menu = document.querySelector('#collapsible');
const check1 = document.querySelector('#tab_menu');
const check2 = document.querySelector('#tab_menu2');
const check3 = document.querySelector('#tab_menu3');
const check4 = document.querySelector('#tab_menu4');
function cancelSelection() {
    if (!menu.cheked) {
        check1.checked = false;
        check2.checked = false;
        check3.checked = false;
        check4.checked = false;
    }
}
window.addEventListener('load', () => {
    menu.addEventListener("click", cancelSelection);
    headerColor();
});
window.addEventListener('resize', () => {
    headerColor();
    if (wiw > 1010) { menu.checked = false; }
});
document.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    if (scroll > 230) { header.classList.add('white'); }
    else if (scroll < 229) { header.classList.remove('white'); }
});
// 푸터
const b01 = document.querySelectorAll('#btn01')
const b02 = document.querySelectorAll('#btn01')
const b03 = document.querySelectorAll('#btn01')
const b04 = document.querySelectorAll('#btn01')

if(b01.checked){
    b01.addEventListener("click", () => {
        b01.checked = false
    })
}
// 푸터
// const btns = document.querySelectorAll('.up button');
// const sites = document.querySelectorAll('.sitetab');
// Array.from(btns).forEach((btn, index) => {

//     btn.addEventListener("click", function (e) {
//         for (let site of sites) { site.classList.remove('on'); }
//         for (let btn of btns) { btn.classList.remove('on'); }
//         btns[index].classList.toggle("on");
//         sites[index].classList.toggle("on");
//         if (this.classList.contains('on')) {
//             this.addEventListener("click", function (e) {
//                 if(this == btn){
//                     console.log(index);
//                     btns[index].classList.toggle("on");
//                     sites[index].classList.toggle("on");
                    
//                 }
                
//             })
//             // e.stopImmediatePropagation;
//         }
        
//     });

// })

