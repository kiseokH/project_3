import React from "react";
import TodayPrice from "./TodayPrice";
import OilTrend from "./OilTrend";
import LowestPrice from "./LowestPrice";
import RegionTopCharge from "./RegionTopCharge";
import "../../static/scss/MainPage/mainPage.scss";

const MainPage = () => {
  return (
    <main className="main-container">
      <section className="today-price-section">
        {/* 오늘의 유가 */}
        <TodayPrice />
      </section>

      {/* 지역 별 Top5 주유소 */}
      <section className="region-top-section">
        <div className="region-top">
          {/* 유가 추이 */}
          <OilTrend />
          {/* 우리지역 Top5 주유소 */}
          <RegionTopCharge />
          {/* 시도 별 최저가 주유소 */}
          <LowestPrice />
        </div>
      </section>
    </main>
  );
};

export default MainPage;
