import React from 'react';
import './directory-item.style.css';

const MenuItem = ({title, imageUrl}) => (
    <div className='menu-item'>
        <div 
            className='menu-background-image'
            style={{
            backgroundImage: `url(${imageUrl})`
            }}
        />
        
        <div className='menu-content'>
            <p className='dirctory-menu-title'>{title}</p>
        </div>
        
    </div>
);

export default MenuItem;