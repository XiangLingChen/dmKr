import React from 'react';
import {withRouter} from 'react-router-dom';
import './directory-item.style.css';

const MenuItem = ({title, imageUrl, history}) => (
    <div className='menu-item'>
        <div 
            className='menu-background-image'
            style={{
            backgroundImage: `url(${imageUrl})`
            }}
        />
        
        <div className='menu-content'>
            <p className='dirctory-menu-title' 
               onClick={ () => history.push('./skincare')}
            >{title}</p>
        </div>
        
    </div>
);

export default withRouter(MenuItem);