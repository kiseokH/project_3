import React from 'react';
import '../../static/scss/Info/Sidebar.scss';
import soil from '../../static/images/stationLogo/soil.PNG';
import gs from '../../static/images/stationLogo/gs.PNG';

const RecommendSTN = () => {
    return (
        <div className="recommendation">
            <h3>주변 주유소 추천</h3>
            <div className="station">
                <div className="station-container">
                    <div className="station-header">
                        <div className="sort-indicator price">가격순</div>
                        <img src={soil} alt="로고" className="station-logo" />
                        <span className="station-name">쌍용주유소</span>
                    </div>
                    <br />
                    <div className="station-body-container">
                        <div className="station-body" style={{margin:"0px 0px 0px 20px"}}>
                            <span className="station-price">- 가격: 1550원</span><br />
                            <span className="station-distance">- 거리: 0.7km</span>
                        </div>
                        <div className="station-buttons" style={{margin:"0px 0px 0px 30px"}}>
                            <button className="station-btn" style={{width:"120px", height:"40px"}}>경유지 설정</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="station">
                <div className="station-container">
                    <div className="station-header">
                        <div className="sort-indicator distance">거리순</div>
                        <img src={gs} alt="로고" className="station-logo" />
                        <span className="station-name">천안주유소</span>
                    </div>
                    <br />
                    <div className="station-body-container">
                        <div className="station-body" style={{margin:"0px 0px 0px 20px"}}>
                            <span className="station-price">- 가격: 1510원</span><br />
                            <span className="station-distance">- 거리: 2.5km</span>
                        </div>
                        <div className="station-buttons" style={{margin:"0px 0px 0px 30px"}}>
                            <button className="station-btn" style={{width:"120px", height:"40px"}}>경유지 설정</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendSTN;