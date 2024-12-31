import React, { useEffect } from 'react';
import '../../static/scss/Info/Maps.scss';

const DestMap = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=8d4462d3e1aeb898f4a7fde7440dec38&autoload=false`;
        script.async = true;

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                    level: 3,
                };
                const map = new window.kakao.maps.Map(container, options);

                const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.9780);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                });
                marker.setMap(map);
            });
        };

        document.head.appendChild(script);
    }, []);

    return <div id="map"></div>;
};

export default DestMap;
