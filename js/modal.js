const open01 = document.querySelector("#modal-open01")
const Box01 = document.querySelector("#modal-box01")
const open02 = document.querySelector("#modal-open02")
const Box02 = document.querySelector("#modal-box02")
const close = document.querySelector(".close")
open01.addEventListener('click',() => {
    Box01.classList.add('active')
});
close.addEventListener('click',() => {
    Box01.classList.remove('active')
});
Box01.addEventListener('click',() => {
    Box01.classList.remove('active')
});
open02.addEventListener('click',() => {
    Box02.classList.add('active')
});
close.addEventListener('click',() => {
    Box02.classList.remove('active')
});
Box02.addEventListener('click',() => {
    Box02.classList.remove('active')
});