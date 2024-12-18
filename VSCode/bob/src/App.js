import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div>
      {/* 공통 헤더 컴포넌트 */}
      <Header />

      {/* 나머지 페이지 내용 */}
      <main>
        <h1>페이지 내용 여기에 추가!</h1>
      </main>
    </div>
  );
}

export default App;
