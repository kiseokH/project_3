import React from "react";
import "../static/scss/popup/popup.scss"; // SCSS 파일 임포트

const Popup = ({ onClose }) => {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                {/* 팝업 헤더 */}
                <div className="popup-header">
                    <img src="/logo.png" alt="logo" className="logo" />
                    <span className="title">만수르주유소</span>
                    <button className="favorite-btn">★</button>
                    <button className="close-btn" onClick={onClose}>X</button>
                </div>

                {/* 기본정보 */}
                <div className="section">
                    <h2>기본정보</h2>
                    <p>전화번호: 02-1234-1234</p>
                    <p>주소: 충남 천안시 서북구 광장로 231</p>
                </div>

                {/* 유가정보 */}
                <div className="section">
                    <h2>유가정보</h2>
                    <div className="oil-price">
                        <span>1650원</span>
                        <span>2024. 12. 22 07:30:12</span>
                    </div>
                </div>

                {/* 평점 */}
                <div className="section">
                    <h2>평점</h2>
                    <p>화장실 청결도: <span className="stars">⭐⭐⭐⭐☆</span></p>
                    <p>접근성: <span className="stars">⭐⭐⭐⭐⭐</span></p>
                    <p>가격: <span className="stars">⭐⭐⭐⭐☆</span></p>
                    <p className="score">4.23점</p>
                </div>

                {/* 부가정보 */}
                <div className="section extra-info">
                    <button className="btn">편의점</button>
                    <button className="btn">24시간</button>
                    <button className="btn">평점쓰기</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
