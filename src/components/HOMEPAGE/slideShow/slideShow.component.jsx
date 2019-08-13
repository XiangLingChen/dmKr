import React from 'react';
import './slideShow.style.css'

const SlideShow = ({property}) => {
    const {index, picture, name, text} = property;
    return (
        <div id={`card-${index}`} className="card">
             <div className="details">
                <h2 className="name">{name}</h2>
                <div className="text">{text}</div>
            </div>
            <img src={picture}/>
        </div>
    )
}

export default SlideShow;