import React, { useEffect } from 'react';
import "../../static/scss/Info/Maps.scss";

const Maps = () => {
    useEffect(() => {
        // 카카오 지도 스크립트 동적으로 로드
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=8d4462d3e1aeb898f4a7fde7440dec38&autoload=false`;
        script.async = true;

        script.onload = () => {
            // 스크립트 로드 후 지도 초기화
            window.kakao.maps.load(() => {
                console.log("카카오 지도 로드 완료");

                const container = document.getElementById('map'); // 지도를 표시할 HTML 요소
                const options = {
                    center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울 중심 좌표
                    level: 3 // 확대 레벨
                };
                const map = new window.kakao.maps.Map(container, options); // 지도 생성

                // 마커 생성
                const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.9780);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
            });
        };

        document.head.appendChild(script);
    }, []);

    return (
    <div id="map"></div>
    );
};

export default Maps;
