// login1 좌표
const x_01 = '37.5006549',
      y_01 = '127.0279943'
      // 구글맵 검색을 통해 나온 url에서 3d와 4d다음에 나오는 수치를 추출하면 원하는 값 도출가능
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
// 마커 지도위에 얹기
Marker_01.setMap(map01)