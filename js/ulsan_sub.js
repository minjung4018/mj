const ulsan12 = '128228'
const taehwa = '128202'
const 대왕암공원 = '127515'
const 가지산도립공원 = '126017'
const 신불산군립공원 = '128207'
const 간절곶 = '2946114'
const 반구대암각화 = '128184'
const 강동몽돌해변 = '128199'
const 주전 = '128200'
const 울산대공원 = '127644'
const 울산대교전망대 = '2612976'
const 장생포고래마을 = '2381176'
const 외고산옹기마을 = '128208'
const 대운산내원암계곡 = '2611135'

const 진하해수욕장 = '126096'
const 영남알프스 = '2524188'
const serviceKey = 'XNo1uhF3LR/HjQD0GAYsNZeeqaa1ZtxEgVQ2DtaFwNqZZ/xnaOjgnsvuitSFBTZVwz1DXqeAe3PVOqQaqH4/Nw=='
const ulsan12api = `https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${serviceKey}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${ulsan12}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=10&pageNo=1`
// const taehwaapi = `https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${serviceKey}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${taehwa}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=10&pageNo=1`

// const gettaehwa = async () => {
//     await fetch(taehwaapi)
//         .then((response) => response.json())
//         .then((data) => {
//             let info = data.response.body.items.item[0]
//             console.log(info)
//             let card01 = document.querySelector(".img")
//             let infoimg = `<img src="${info.firstimage}">`
//             card01.innerHTML = infoimg
//             // 12경의 타이틀과 내용으로 구성된 문자열
//             // 카드구성 및 인터렉션을 고민해서 밀어넣기를 어떻게 할것인지 확정 후 데이터 재구성
//         })
// }
// gettaehwa()
const get12 = async () => {
    await fetch(ulsan12api)
        .then((response) => response.json())
        .then((data) => {
            let info = data.response.body.items.item[0]
            console.log(info.overview)
            let card01 = document.querySelector(".span")
            let over01 = document.querySelector(".overview")
            let infoArr = info.overview.split('*')
            console.log(infoArr)
            let infotitle1 = infoArr[1].split('</strong><br />')

            console.log(infotitle1)
            card01.innerHTML = infotitle1[0]
            over01.innerHTML = infotitle1[1]
            // 12경의 타이틀과 내용으로 구성된 문자열
            // 카드구성 및 인터렉션을 고민해서 밀어넣기를 어떻게 할것인지 확정 후 데이터 재구성

        })
}
get12()