const cultureapi = '../js/Tculture.json';
const getculture = () => {
    fetch(cultureapi).then((response) => response.json()).then((data) => {
        let infos = data.response.body.items.item;
        Array.from(infos).forEach((info) => {
            let imgurl = info.firstimage;
            let infotitle = info.title;
            let infoaddr = info.addr1;
            let infocode = info.cat3;
            let cards = document.querySelector('.cards');
            let card = document.createElement('div');
            let imgbox = document.createElement('img');
            let textbox = document.createElement('div');
            let divtitle = document.createElement('span');
            let divaddr = document.createElement('span');
            let spantitle = document.createTextNode(infotitle);
            let spanaddr = document.createTextNode(infoaddr);
            divtitle.appendChild(spantitle);
            divaddr.appendChild(spanaddr);
            textbox.appendChild(divtitle);
            textbox.appendChild(divaddr);
            card.appendChild(imgbox);
            card.appendChild(textbox);
            cards.appendChild(card);

            card.setAttribute('data-code', infocode);
            card.setAttribute('class', "card");
            imgbox.setAttribute('src', imgurl);
            textbox.setAttribute('class', "note");
            divtitle.setAttribute('class', "title");
            divaddr.setAttribute('class', "addr");
        });
    });
};
getculture();

// 탭 button 이벤트
const btnspan = document.querySelector('.btns > span');
const btns = document.querySelectorAll('.btns > button');
Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', function () {
        for (const btn of btns) { btn.classList.remove('on'); }
        btnspan.classList.remove('on');
        btn.classList.add('on');

        const cards = document.querySelectorAll('.card');
        let btncode1 = this.getAttribute("data-id1");
        let btncode2 = this.getAttribute("data-id2");
        for (const card of cards) {
            card.classList.remove('off');
            let cardcode = card.getAttribute("data-code");
            if (cardcode !== btncode1) {
                card.classList.add('off');
            }
            if (cardcode == btncode2) {
                card.classList.remove('off');
            }
        }
    });
});
// 탭 전체보기span 이벤트
btnspan.addEventListener('click', function () {
    for (const btn of btns) btn.classList.remove('on');
    this.classList.add('on');

    const cards = document.querySelectorAll('.card');
    for (const card of cards) card.classList.remove('off');
});