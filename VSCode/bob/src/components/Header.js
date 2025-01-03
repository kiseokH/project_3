import React from 'react';
import '../static/scss/header.scss';
import { Link } from 'react-router-dom';
import logosample from '../static/images/sampleLOGO.png';
import info from '../static/images/icons/info.png';
import search from '../static/images/icons/search.png';
import riding from '../static/images/icons/riding.png';
import board from '../static/images/icons/board.png';
import mypage from '../static/images/icons/mypage.png';

function Header() {
    return (
        <header className="header-container">
            <div className="header-size">
                {/* 왼쪽로고 */}
                <div className="logo">
                    <a href="/">
                        <img src={logosample} alt="로고" style={{ height: "35px" }}></img>
                    </a>
                </div>

                {/* 메뉴 리스트 */}
                <nav className="nav-menu">
                    <ul>
                        <li><Link to="/info">주유소 정보&추천</Link> </li>
                        <li><Link to="/MainMapPage">목적지 검색</Link> </li>
                        <li><Link to="/Riding">테마 라이딩</Link></li>
                        <li><Link to="/board">자유게시판</Link> </li>
                    </ul>
                </nav>

                {/* 로그인 및 회원가입 버튼 */}
                <div className="auth-buttons">
                    <button className="login-button">로그인</button>
                    <button className="signup-button">회원가입</button>
                </div>
            </div>

            {/* 모바일 하단 메뉴 */}
            <div className="mobile-menu">
                <ul>
                    <li><Link to="/info"><img src={info} alt="정보찾기" /></Link></li>
                    <li><a href="/MainMapPage"><img src={search} alt="목적지" /></a></li>
                    <li><Link to="/Riding"><img src={riding} alt="라이딩" /></Link></li>
                    <li><Link to="/board"><img src={board} alt="게시판" /></Link></li>
                    <li><a href="#"><img src={mypage} alt="마이페이지" /></a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
