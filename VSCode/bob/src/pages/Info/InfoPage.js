import React from 'react';
import Sidebar from './Sidebar';
import Maps from './Maps';
import "../../static/scss/Info/InfoPage.scss";

const InfoPage = () => {
    return (
        <div className="info-container">
            <Sidebar />
            <Maps />
        </div>
    );
};

export default InfoPage;