// login1
const x_01 = '37.5006549',
      y_01 = '127.0279943'
// 지도를 삽입할 위치와 지도의 기본옵션설정  
let mapbox01 = document.querySelector('#map01'),
    mapOption01 = { 
        center: new kakao.maps.LatLng(x_01, y_01), // 위도와 경도를 지도의 중심으로 잡는다.
        level: 3
    }
    
// 지도 생성 new kakao.maps.Map(지도표시할곳, 지도옵션) 
let map01 = new kakao.maps.Map(mapbox01, mapOption01) 
    
// 마커 생성 및 옵션설정 
let Mar01 = new kakao.maps.LatLng(x_01, y_01)
let Marker_01 = new kakao.maps.Marker({
    position: Mar01
})
Marker_01.setMap(map01)

// login2
const x_02 = '37.5006549',
      y_02 = '127.0279943'
let mapbox02 = document.querySelector('#map02'),
    mapOption02 = { 
        center: new kakao.maps.LatLng(x_02, y_02),
        level: 3
    }
let map02 = new kakao.maps.Map(mapbox02, mapOption02) 

let Mar02 = new kakao.maps.LatLng(x_02, y_02)
let Marker_02 = new kakao.maps.Marker({
    position: Mar02
})
Marker_02.setMap(map02)

// 메모리컴퍼니
const x_03 = '37.5041987',
      y_03 = '127.025675'
let mapbox03 = document.querySelector('#map03'),
    mapOption03 = { 
        center: new kakao.maps.LatLng(x_03, y_03),
        level: 3
    }
let map03 = new kakao.maps.Map(mapbox03, mapOption03) 

let Mar03 = new kakao.maps.LatLng(x_03, y_03)
let Marker_03 = new kakao.maps.Marker({
    position: Mar03
})
Marker_03.setMap(map03)

// 우주라이크
const x_04 = '37.5001389',
      y_04 = '127.0283996'
let mapbox04 = document.querySelector('#map04'),
    mapOption04 = { 
        center: new kakao.maps.LatLng(x_04, y_04),
        level: 3
    }
let map04 = new kakao.maps.Map(mapbox04, mapOption04) 

let Mar04 = new kakao.maps.LatLng(x_04, y_04)
let Marker_04 = new kakao.maps.Marker({
    position: Mar04
})
Marker_04.setMap(map04)

// 강남 더오름
const x_05 = '37.4965257',
      y_05 = '127.0310831'
let mapbox05 = document.querySelector('#map05'),
    mapOption05 = { 
        center: new kakao.maps.LatLng(x_05, y_05),
        level: 3
    }
let map05 = new kakao.maps.Map(mapbox05, mapOption05) 

let Mar05 = new kakao.maps.LatLng(x_05, y_05)
let Marker_05 = new kakao.maps.Marker({
    position: Mar05
})
Marker_05.setMap(map05)

// 강남점
const x_06 = '37.5001389',
      y_06 = '127.0283996'
let mapbox06 = document.querySelector('#map06'),
    mapOption06 = { 
        center: new kakao.maps.LatLng(x_06, y_06),
        level: 3
    }
let map06 = new kakao.maps.Map(mapbox06, mapOption06) 

let Mar06 = new kakao.maps.LatLng(x_06, y_06)
let Marker_06 = new kakao.maps.Marker({
    position: Mar06
})
Marker_06.setMap(map06)

//부산점
const x_07 = '35.2110254',
      y_07 = '129.0072666'
let mapbox07 = document.querySelector('#map07'),
    mapOption07 = { 
        center: new kakao.maps.LatLng(x_07, y_07),
        level: 3
    }
let map07 = new kakao.maps.Map(mapbox07, mapOption07) 

let Mar07 = new kakao.maps.LatLng(x_07, y_07)
let Marker_07 = new kakao.maps.Marker({
    position: Mar07
})
Marker_07.setMap(map07)

// 전주점
const x_08 = '35.8155267',
      y_08 = '127.1082763'
let mapbox08 = document.querySelector('#map08'),
    mapOption08 = { 
        center: new kakao.maps.LatLng(x_08, y_08),
        level: 3
    }
let map08 = new kakao.maps.Map(mapbox08, mapOption08) 

let Mar08 = new kakao.maps.LatLng(x_08, y_08)
let Marker_08 = new kakao.maps.Marker({
    position: Mar08
})
Marker_08.setMap(map08)

// 홍대점
const x_09 = '37.5489167',
      y_09 = '126.9209115'
let mapbox09 = document.querySelector('#map09'),
    mapOption09 = { 
        center: new kakao.maps.LatLng(x_09, y_09),
        level: 3
    }
let map09 = new kakao.maps.Map(mapbox09, mapOption09) 

let Mar09 = new kakao.maps.LatLng(x_09, y_09)
let Marker_09 = new kakao.maps.Marker({
    position: Mar09
})
Marker_09.setMap(map09)