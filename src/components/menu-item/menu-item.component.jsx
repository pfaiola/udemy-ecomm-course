import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, id, imageUrl, size }) => (
    <div className={`${size} menu-item`} key={id}>
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className="background-image">
        
        </div>
        <div className="content">
            <h1 className="title">{ title.toUpperCase() }</h1>
            <span className="subtitle">SHOP Now</span>
        </div>
    </div>
);

export default MenuItem;