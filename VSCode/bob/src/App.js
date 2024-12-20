import React from 'react';
import Header from './components/Header';
import MainPage from "./pages/Main/MainPage";

function App() {
  return (
    <div>
      {/* 공통 헤더 컴포넌트 */}
      <Header />
      {/* 메인인 페이지 내용 */}
      <main>
        <MainPage />
      </main>
    </div>
  );
}

export default App;
