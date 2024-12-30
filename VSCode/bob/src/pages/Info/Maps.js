import React, { useEffect } from 'react';
import "../../static/scss/Info/Maps.scss"

const Maps = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&libraries=services`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            const kakao = window.kakao;
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(37.5665, 126.9780),
                level: 3
            };
            new kakao.maps.Map(container, options);
        };
    }, []);

    return (
        <div id="map" className="map">
            <div className="map-placeholder">지도가 여기에 표시됩니다.</div>
        </div>
    );
};

export default Maps;
