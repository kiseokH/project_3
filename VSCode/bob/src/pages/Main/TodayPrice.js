import React from "react";

const TodayPrice = () => {
    return (
        <div className="today-price">
            <h2>오늘의 유가</h2>
            <div className="price-container">
                <div className="price-box">
                    <h3>전국 평균</h3>
                    <p>1654.47 <span>▲1.26</span></p>
                    <p>최저가: 1554 | 최고가: 2871</p>
                </div>
                <div className="price-box">
                    <h3>충남 평균</h3>
                    <p>1657.89 <span>▼0.78</span></p>
                    <p>최저가: 1575 | 최고가: 1898</p>
                </div>
            </div>
        </div>
    );
};

export default TodayPrice;