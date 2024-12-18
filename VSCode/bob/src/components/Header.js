import React from 'react';
import '../static/scss/Header.scss';

function Header() {
    return (
        <header className="header-container">
            {/* 왼쪽로고 */}
            <div className="logo">
                <a href="/">
                    <span className="logo-text">BOBJAR</span>
                </a>
            </div>

            {/* 메뉴 리스트 */}
            <nav className="nav-menu">
                <ul>
                    <li><a href="#">주유소 정보</a> </li>
                    <li><a href="#">근처 주유소 찾기</a> </li>
                    <li><a href="#">커뮤니티</a> </li>
                </ul>
            </nav>

            {/* 로그인 및 회원가입 버튼 */}
            <div className="auth-buttons">
                <button className="login-button">로그인</button>
                <button className="signup-button">회원가입</button>
            </div>
        </header>
    )
}

export default Header;