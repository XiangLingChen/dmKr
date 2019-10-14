import React from 'react';
import {withRouter} from 'react-router-dom';

import './directory-item.style.css';

const MenuItem = ({title, imageUrl, match, history, routeName}) => (
    <div className='menu-item'>
        <div 
            className='menu-background-image'
            style={{
            backgroundImage: `url(${imageUrl})`
            }}
        />
        
        <div className='menu-content'>
            <div className='dirctory-menu-title' onClick={()=> history.push(`${match.url}/${routeName}`)}
            >
            {title}
            </div>
        </div>
        
    </div>
);

export default withRouter(MenuItem);