import React from 'react';
import {withRouter} from 'react-router-dom';
import './collections_banner.style.css'

const CollectionsBanner = ({history}) => (
    <div className='CollectionsBanner_container' onClick={() => history.push('./about')}>
        <div className='CollectionsBanner_content'>
            <p className='CollectionsBanner_text'> WE INNOVATES EFFECTIVE FORMULAS TO</p>
            <p className='CollectionsBanner_text'> DELIVER RESULTS FOR YOUR CONCERNS. </p>
        </div>
        <div className='mask'>
            <div className='mask-content'>
                <p className='mask-content-text'>KNOW MORE ABOUT US</p>
            </div>
        </div>
    </div>
);

export default withRouter(CollectionsBanner);