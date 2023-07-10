const menu = document.querySelector('#collapsible')
const check1 = document.querySelector('#tab_menu')
const check2 = document.querySelector('#tab_menu2')
const check3 = document.querySelector('#tab_menu4')
function cancelSelection() {   
    if(!menu.cheked){
        check1.checked = false;
        check2.checked = false;
        check3.checked = false;
    }
}
menu.addEventListener("click", cancelSelection)