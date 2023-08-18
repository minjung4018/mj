const ulsan12 = '128228'
const serviceKey = 'XNo1uhF3LR/HjQD0GAYsNZeeqaa1ZtxEgVQ2DtaFwNqZZ/xnaOjgnsvuitSFBTZVwz1DXqeAe3PVOqQaqH4/Nw=='
const ulsan12api = `https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${serviceKey}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${ulsan12}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=10&pageNo=1`
const get12 = async () => {
    await fetch(ulsan12api)
        .then((response) => response.json())
        .then((data) => {
            let info = data.response.body.items.item[0]
            let infoArr = info.overview.split('*')
            let cards = document.querySelectorAll(".cards > .card")
            Array.from(cards).forEach((card, index) => {
                let span = card.querySelector(".span")
                let overview = card.querySelector(".overview")
                let info = infoArr[index+1].split('</strong><br />')
                let infotitle = info[0]
                let infooverview = info[1]
                span.innerHTML = infotitle
                overview.innerHTML = infooverview
            });
        })
}
get12()