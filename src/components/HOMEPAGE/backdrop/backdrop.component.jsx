import React from 'react';
import './backdrop.style.css';

const BackDrop = props => (
    <div className="backdrop-container" onClick={props.click}/>
);

export default BackDrop;