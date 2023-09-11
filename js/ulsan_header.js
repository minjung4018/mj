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
// 최초로딩
window.addEventListener('load', () => {
    menu.addEventListener("click", cancelSelection);
    headerColor();
});
// 리사이징
window.addEventListener('resize', () => {
    headerColor();
    if (wiw > 1010) { menu.checked = false; }
});
document.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    if (scroll > 160) { header.classList.add('white'); }
    else if (scroll < 159) { header.classList.remove('white'); }
});