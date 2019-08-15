import React from 'react';

import './collectionSlideShow.style.css';

const SlideShow = ({property}) => {
    const {index, picture, name, text} = property;
    return (
        <div id={`card-${index}`} className="card">
             <div className="details">
                <h2 className="name">{name}</h2>
                <div className="text">{text}</div>
                <p className="card-CTA">Shop Now</p>
            </div>
            <img src={picture} className="collectionsImage"/>
        </div>
    )
}

export default SlideShow;