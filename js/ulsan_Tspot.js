// https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=XNo1uhF3LR%2FHjQD0GAYsNZeeqaa1ZtxEgVQ2DtaFwNqZZ%2FxnaOjgnsvuitSFBTZVwz1DXqeAe3PVOqQaqH4%2FNw%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=2784124&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=10&pageNo=

// 관광지 12코드 기준 결과 168개
const serviceKey = `XNo1uhF3LR/HjQD0GAYsNZeeqaa1ZtxEgVQ2DtaFwNqZZ/xnaOjgnsvuitSFBTZVwz1DXqeAe3PVOqQaqH4/Nw==`;
const spotapi = `https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${serviceKey}&numOfRows=120&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=o&contentTypeId=12&areaCode=7`;
const getspot = async () => {
    await fetch(spotapi).then((response) => response.json()).then((data) => {
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

        // 검색결과 갯수만큼 생성하면서 데이터 넣어라
        // 버튼 클릭에 따라 코드 구분 소팅
    });
};
getspot();


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
            let slicecode = card.getAttribute("data-code").slice(-7);
            if (slicecode !== btncode1) {
                card.classList.add('off');
            }
            if (slicecode == btncode2) {
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