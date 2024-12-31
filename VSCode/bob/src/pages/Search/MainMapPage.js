import React, { useState, useEffect } from 'react';
import DestMap from './DestMap';
import '../../static/scss/Info/InfoPage.scss';
import Sbtn from "../../static/images/icons/searchBTN.png";
import cam from "../../static/images/icons/cam.PNG";
import SearchDest from './SearchDest';
import RecommendSTN from './RecommendSTN';

const MainMapPage = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [activePopup, setActivePopup] = useState(null); // 모바일 팝업 상태 관리

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 450);
        };

        handleResize(); // 초기실행
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const closePopup = () => setActivePopup(null); //팝업 닫기

    return (
        <div className="info-container">
            {isSmallScreen ? (
                // 모바일 화면: 버튼 렌더링
                <div className="mobile-buttons">
                    <button onClick={() => setActivePopup('search')}>
                        <img src={Sbtn} alt="검색" />
                    </button>
                    <button onClick={() => setActivePopup('camera')}>
                        <img src={cam} alt="후방카메라" />
                    </button>
                </div>
            ) : (
                // 웹 화면: 사이드바 렌더링
                <div className="sidebar">
                    <SearchDest />
                    <RecommendSTN />
                </div>
            )}

            <div className="main-content">
                <DestMap />
            </div>

            {/* 모바일 팝업 */}
            {isSmallScreen && activePopup === 'search' && (
                <div className="popup mobile-popup">
                    <div className="popup-content">
                        <button className="close-btn" onClick={closePopup}>✖</button>
                        <SearchDest />
                        <RecommendSTN/>
                    </div>
                </div>
            )}
            {isSmallScreen && activePopup === 'camera' && (
                <div className="popup mobile-popup">
                    <div className="popup-content">
                        <button className="close-btn" onClick={closePopup}>✖</button>

                    </div>
                </div>
            )}



        </div>
    );
};

export default MainMapPage;
