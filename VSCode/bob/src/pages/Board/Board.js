import React, { useState, useEffect } from "react";
import "../../static/scss/Board/board.scss";
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver";
import "tinymce/icons/default";

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(""); // "register", "view"
  const [currentPost, setCurrentPost] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 상태 추가

  useEffect(() => {
    // 예시 데이터 로드
    const exampleData = [
      {
        id: 2,
        category: "QnA",
        title: "게시글 제목 1",
        content: "게시글 내용 1",
        writer: "작성자 1",
        createdDate: "2025-01-01",
        viewCount: 10,
      },
      {
        id: 1,
        category: "Tips",
        title: "게시글 제목 2",
        content: "게시글 내용 2",
        writer: "작성자 2",
        createdDate: "2025-01-02",
        viewCount: 20,
      },
    ];
    setPosts(exampleData);
  }, []);

  const togglePopup = (type, post = null) => {
    if (!showPopup) {
      // 팝업 열기
      setPopupType(type);
      setCurrentPost(post);
      setShowPopup(true);
      setTimeout(() => setIsAnimating(true), 10); // 약간의 지연 후 애니메이션 시작
    } else {
      // 팝업 닫기
      setIsAnimating(false); // 애니메이션 종료
      setTimeout(() => {
        setShowPopup(false);
        setPopupType(""); // 팝업 타입 초기화
        setCurrentPost(null); // 선택된 게시글 초기화
      }, 300); // 애니메이션 지속 시간 후 팝업 닫기
    }
  };

  const renderTable = () =>
    posts.map((post) => (
      <tr key={post.id} onClick={() => togglePopup("view", post)}>
        <td>{post.id}</td>
        <td>{post.category}</td>
        <td>{post.title}</td>
        <td>{post.writer}</td>
        <td>{post.createdDate}</td>
        <td>{post.viewCount}</td>
      </tr>
    ));

  return (
    <div className="board">
      <div className="board-title">자유게시판</div>
      <div className="search-register">
        <div className="navbar">
          <ul>
            <li>
              <a href="#!" onClick={() => setPosts([])}>
                전체
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => setPosts([])}>
                QnA
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => setPosts([])}>
                꿀팁
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => setPosts([])}>
                자유이야기
              </a>
            </li>
          </ul>
        </div>
        <form className="filter-group">
          <select name="category">
            <option value="B_ID">번호</option>
            <option value="B_TITLE">제목</option>
            <option value="B_WRITER">작성자</option>
          </select>
          <input type="text" placeholder="검색어를 입력하세요" />
          <button type="button">조회</button>
          <button type="button" onClick={() => togglePopup("register")}>
            등록하기
          </button>
        </form>
      </div>
      <table className="freeBoard-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>구분</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>

      {/* 등록 팝업 */}
      {showPopup && popupType === "register" && (
        <div className={`register-popup ${isAnimating ? "open" : "close"}`}>
          <h2>게시글 등록</h2>
          <form>
            <button
              type="button"
              className="close-btn"
              onClick={() => togglePopup("register")}
            >
              X
            </button>
            <div className="form-group">
              <input type="text" placeholder="제목을 입력하세요" />
              <select>
                <option value="QnA">QnA</option>
                <option value="Tips">꿀팁</option>
                <option value="Free">자유이야기</option>
              </select>
            </div>
            <textarea placeholder="내용을 입력하세요"></textarea>
            <button type="button">등록</button>
          </form>
        </div>
      )}

      {/* 보기 팝업 */}
      {showPopup && popupType === "view" && (
        <div className={`view-popup ${isAnimating ? "open" : "close"}`}>
          <form>
            <button
              type="button"
              className="close-btn"
              onClick={() => togglePopup("view")}
            >
              X
            </button>
            <h2>{currentPost.title}</h2>
            <div className="form-group">
              <p>
                <strong>카테고리:</strong> {currentPost.category}
              </p>
              <div className="right">
                <p>
                  <strong>날짜:</strong> {currentPost.createdDate}
                </p>
                <p>
                  <strong>작성자:</strong> {currentPost.writer}
                </p>
              </div>
            </div>
            <textarea value={currentPost.content} readOnly></textarea>
          </form>
        </div>
      )}
    </div>
  );
};

export default Board;
