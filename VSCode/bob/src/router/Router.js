import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/Main/MainPage'; // 메인 페이지
// import Login from '../pages/Login/Login'; // 로그인 페이지
// import Board from '../pages/Board/Board'; // 보드 페이지
// import Info from '../pages/Info/Info'; // 정보 페이지
// import MyPage from '../pages/Search/MyPage'; // 마이 페이지
// import Search from '../pages/Search/Search'; // 검색 페이지
// import Theme from '../pages/Theme/Theme'; // 테마 페이지

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} /> {/* 메인 페이지 */}
      {/* <Route path="/login" element={<Login />} /> 로그인 페이지 */}
      {/* <Route path="/board" element={<Board />} /> 보드 페이지 */}
      {/* <Route path="/info" element={<Info />} /> 정보 페이지 */}
      {/* <Route path="/MyPage" element={<MyPage />} /> 로그인 페이지 */}
      {/* <Route path="/MyPage" element={<Search />} /> 로그인 페이지 */}
      {/* <Route path="/MyPage" element={<Theme />} /> 로그인 페이지 */}
    </Routes>
  );
}

export default AppRouter;
