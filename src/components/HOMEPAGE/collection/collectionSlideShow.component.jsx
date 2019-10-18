import React from 'react';

import './collectionSlideShow.style.css';

const SlideShow = ({property}) => {
    const {index, picture, name, text} = property;
    return (
        <div id={`card-${index}`} className="card">
            <div className="details-container">
                <div className="details">
                    <h2 className="name">{name}</h2>
                    <div className="text">{text}</div>
                    <p className="card-CTA">Shop Now</p>
                </div>
            </div>
             
            <div className="details-container">
                <img src={picture} className="collectionsImage" alt=''/>
            </div>
        </div>
    )
}

export default SlideShow;