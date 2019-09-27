import React from 'react';
import './directory-item.style.css';

const MenuItem = ({title, imageUrl}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}
    className='menu-item'>
        <div className='menu-content'>
            <p className='menu-item-title'>{title}</p>
        </div>
    </div>
);

export default MenuItem;