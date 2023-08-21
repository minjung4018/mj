const btns = document.querySelectorAll('button')
const btnspan = document.querySelector('.btns > span');
Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', function () {
        for (const btn of btns) { btn.classList.remove('on'); }
        btnspan.classList.remove('on');
        btn.classList.add('on');

        const cards = document.querySelectorAll('.all > a');
        let btncode1 = this.getAttribute("data-id1");
        for (const card of cards) {
            card.classList.remove('off');
            let cardcode = card.getAttribute("data-code");
            console.log(cardcode)
            if (cardcode !== btncode1) {
                card.classList.add('off');
            }
        }
    });
});
// 탭 전체보기span 이벤트
btnspan.addEventListener('click', function () {
    for (const btn of btns) btn.classList.remove('on');
    this.classList.add('on');

    const cards = document.querySelectorAll('.all > a');
    for (const card of cards) card.classList.remove('off');
});