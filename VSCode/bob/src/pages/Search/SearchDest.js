import React, { useState } from 'react';
import '../../static/scss/Info/Sidebar.scss';

const SearchDest = () => {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');

    return (
        <div className="search-dest">
            <h3>어디를 가시나요?</h3>
            <div>
                <input className="searchInput"
                    type="text"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    placeholder="출발지를 입력하세요"
                />
            </div>
            <div>                
                <input className="searchInput"
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="도착지를 입력하세요"
                />
            </div><br/>
            <button className='findPathBTN'>
            길 찾기</button>
        </div>
    );
};

export default SearchDest;
