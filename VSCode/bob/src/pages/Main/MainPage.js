import React from "react";
import TodayPrice from "./TodayPrice";
import RegionTopCharge from "./RegionTopCharge";
import "../../static/scss/MainPage/MainPage.scss";

const MainPage = () => {
    return (
        <main className="main-container">
            {/* 오늘의 유가 */}
            <section className="today-price-section">
                <TodayPrice />
            </section>

            {/* 지역 별 Top5 주유소 */}
            <section className="region-top-section">
                <RegionTopCharge />
            </section>
        </main >
    );
};

export default MainPage;