import React from 'react';
import {withRouter} from 'react-router-dom';
import './collectionSlideShow.style.css';

const SlideShow = ({property, match, history}) => {
    const {index, picture, name, text, linkUrl} = property;
    return (
        <div id={`card-${index}`} className="card">
            <div className="details-container">
                <div className="details">
                    <h2 className="name">{name}</h2>
                    <div className="text">{text}</div>
                    <p className="card-CTA" onClick={()=> history.push(`/${linkUrl}`)}>Shop Now</p>
                </div>
            </div>
             
            <div className="details-container">
                <img src={picture} className="collectionsImage" alt='' onClick={()=> history.push(`/${linkUrl}`)}/>
            </div>
        </div>
    )
}

export default withRouter(SlideShow);