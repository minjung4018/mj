const open = document.querySelector("#modal-open")
const modalBox = document.querySelector("#modal-box")
const close = document.querySelector("#close")
open.addEventListener('click',() => {
    modalBox.classList.add('active')
});
close.addEventListener('click',() => {
    modalBox.classList.remove('active')
});
modalBox.addEventListener('click',() => {
    modalBox.classList.remove('active')
});