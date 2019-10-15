import React from 'react';
import {withRouter} from 'react-router-dom';
import './res-header.style.css';

const ResHeader = ({history}) => (
    <div className='header-container' onClick={ ()=> history.push('./shopall/q10')}>
        <div className='header-content'>
            <h2 className='header-title'>Q10 COLLECTION</h2>
            <div className='ContentTextContainer'>
                <p className='content'>Tightens and strengthens :</p>
                <p className='content'>Effective Energy source For Your Skin.</p>
            </div>
            <h3 className="CTA" onClick={ ()=> history.push('./shopall/q10')}>SHOP NOW</h3>
        </div>
    </div>
);
export default withRouter(ResHeader);