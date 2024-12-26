import React from "react";
import TodayPrice from "./TodayPrice";
import OilTrend from "./OilTrend";
import LowestPrice from "./LowestPrice";
import RegionTopCharge from "./RegionTopCharge";
import "../../static/scss/MainPage/mainPage.scss";



const MainPage = () => {
    return (
        <main className="main-container">
            {/* 오늘의 유가 */}
            <section className="today-price-section">
                <div className="today-price">
                    <TodayPrice />
                    <OilTrend />
                </div>
            </section>

            {/* 지역 별 Top5 주유소 */}
            <section className="region-top-section">
                <div className="region-top">
                    <RegionTopCharge />
                    <LowestPrice />
                </div>
            </section>
        </main >
    );
};

export default MainPage;