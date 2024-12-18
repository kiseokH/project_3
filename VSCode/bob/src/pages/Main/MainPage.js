import React from "react";
import TodayPrice from "./TodayPrice";
import RegionTopGas from "./RegionTopGas";
import RegionTopCharge from "./RegionTopCharge";
import OilTrend from "./OilTrend";
import "../../static/scss/MainPage/MainPage.scss";

const MainPage = () => {
    return (
        <main className="main-container">
            {/* 오늘의 유가 */}
            <section className="today-price-section">
                <TodayPrice />
                <OilTrend />
            </section>

            {/* 지역 별 Top5 주유소와 충전소 */}
            <section className="region-top-section">
                <div className="region-gas">
                    <RegionTopGas />
                </div>
                <div className="region-charge">
                    <RegionTopCharge />
                </div>
            </section>
        </main>
    );
};

export default MainPage;