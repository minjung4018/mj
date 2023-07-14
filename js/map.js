// login1 좌표
const x_01 = '37.5006549',
      y_01 = '127.0279943'
// 지도를 삽입할 위치와 지도의 기본옵션설정  
let mapbox01 = document.querySelector('#map01'),
    mapOption01 = { 
        center: new kakao.maps.LatLng(x_01, y_01), // 위도와 경도를 지도의 중심으로 잡는다.
        level: 3 // 지도의 확대 레벨, 숫자가 작아질수록 확대된 지도
    }
    
// 지도 생성 new kakao.maps.Map(지도표시할곳, 지도옵션) 
let map01 = new kakao.maps.Map(mapbox01, mapOption01) 
    
// 마커 생성 및 옵션설정 
let Mar01 = new kakao.maps.LatLng(x_01, y_01)
let Marker_01 = new kakao.maps.Marker({
    position: Mar01
})
Marker_01.setMap(map01)

// login2 좌표
const x_02 = '37.5006549',
      y_02 = '127.0279943'
// 지도를 삽입할 위치와 지도의 기본옵션설정  
let mapbox02 = document.querySelector('#map02'),
    mapOption02 = { 
        center: new kakao.maps.LatLng(x_02, y_02), // 위도와 경도를 지도의 중심으로 잡는다.
        level: 3 // 지도의 확대 레벨, 숫자가 작아질수록 확대된 지도
    }
    
// 지도 생성 new kakao.maps.Map(지도표시할곳, 지도옵션) 
let map02 = new kakao.maps.Map(mapbox02, mapOption02) 
    
// 마커 생성 및 옵션설정 
let Mar02 = new kakao.maps.LatLng(x_02, y_02)
let Marker_02 = new kakao.maps.Marker({
    position: Mar02
})
Marker_02.setMap(map02)