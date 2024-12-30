import React, { useState } from 'react';
import '../../static/scss/Info/Sidebar.scss';

const Search = () => {
    const [selectedSi, setSelectedSi] = useState('');
    const [selectedGu, setSelectedGu] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [sortOption, setSortOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option === selectedOption ? null : option);
    };

    const handleSortClick = (option) => {
        setSortOption(option);
    };

    const guData = {
        서울시: ['도봉구', '노원구'],
        충청남도: ['천안시']
    };

    const dongData = {
        도봉구: ['방학동', '쌍문동'],
        노원구: ['중계동', '하계동'],
        천안시: ['불당동', '신불당동']
    };

    const siList = ['서울시', '충청남도'];

    return (
        <div className="search">
            <h3>주유소 검색</h3>
                <div className="search-filter">
                    <div className="filter">
                        <label>
                            <select onChange={(e) => setSelectedSi(e.target.value)}>
                                <option value="">시/도</option>
                                {siList.map((si) => (
                                    <option key={si} value={si}>{si}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            <select onChange={(e) => setSelectedGu(e.target.value)}>
                                <option value="">군/구</option>
                                {guData[selectedSi]?.map((gu) => (
                                    <option key={gu} value={gu}>{gu}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            <select>
                                <option value="">읍/면/동</option>
                                {dongData[selectedGu]?.map((dong) => (
                                    <option key={dong} value={dong}>{dong}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="filter-options">
                        <button
                            className={`filter-btn ${selectedOption === '정비소' ? 'active' : ''}`}
                            onClick={() => handleOptionClick('정비소')}
                        >
                            정비소
                        </button>
                        <button
                            className={`filter-btn ${selectedOption === '편의점' ? 'active' : ''}`}
                            onClick={() => handleOptionClick('편의점')}
                        >
                            편의점
                        </button>
                        <button
                            className={`filter-btn ${selectedOption === '24시간' ? 'active' : ''}`}
                            onClick={() => handleOptionClick('24시간')}
                        >
                            24시간
                        </button>
                        <br/>
                        <button className="search-btn">조회하기</button>
                    </div>
               </div>    
            <div className="sort-options">
                <button
                    className={`sort-btn ${sortOption === '낮은가격순' ? 'active' : ''}`}
                    onClick={() => handleSortClick('낮은가격순')}
                >
                    낮은가격순
                </button>
                <button
                    className={`sort-btn ${sortOption === '평점높은순' ? 'active' : ''}`}
                    onClick={() => handleSortClick('평점높은순')}
                >
                    평점높은순
                </button>
            </div>
            <div className="price-list">
                <ul>
                    {Array.from({ length: 20 }, (_, i) => (
                        <li key={i}>
                            <span>주유소 {i + 1}</span>
                            <span className="price">{1500 + i}원</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Search;
