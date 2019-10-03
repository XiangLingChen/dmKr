import React from 'react';
import {withRouter} from 'react-router-dom';
import './collections_banner.style.css'

const CollectionsBanner = ({history}) => (
    <div className='CollectionsBanner_container'>
        <div className='CollectionsBanner_content'>
            <p className='CollectionsBanner_text'> WE INNOVATES EFFECTIVE FORMULAS TO</p>
            <p className='CollectionsBanner_text'> DELIVER RESULTS FOR YOUR CONCERNS. </p>
            <div className='CTA_container'>
                <span className='CollectionsBanner_CTA' onClick={ ()=> history.push('./directory')}>Shop by Directory</span>
            </div>
        </div>
    </div>
);

export default withRouter(CollectionsBanner);