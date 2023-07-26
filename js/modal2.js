// sec03 지점정보
const btns = document.querySelectorAll(".radio button");
const infos = document.querySelectorAll(".down > div");
Array.from(btns).forEach((btn, index) => {
    // 배열로 들어온 정보에서 각 버튼을 클릭시
    btn.addEventListener("click", function () {
        for (let info of infos) { info.classList.remove('on'); }
        for (let btn of btns) { btn.classList.remove('on'); }
        btns[index].classList.add("on");
        infos[index].classList.add("on");
        
        let num = `0${index + 1}` // 문자열임
        let map = new Function(`return map${num}`)();
        // 문자열을 변수로 지정하려면 함수형 객체를 거친다
        // 지도생성된 변수의 네임규칙 뽑아내기 map01, map02
        map.relayout();
        // infos에 on이 붙는 여부에 따라 지도생성시 기본값으로 오그라듦
        // 내가 누른버튼의 인덱스와 맞는 지도를 재구성 .relayout()
        let x = new Function(`return x_${num}`)();
        let y = new Function(`return y_${num}`)();
        // 각 지도의 위치값 변수로 받아오기
        map.setCenter(new kakao.maps.LatLng(x,y));
        // 각 지도의 마커를 중심에 셋팅하라 .setCenter()
    });
});
btns[0].click(); // 첫번째 탭 켜놓기, 트리거
