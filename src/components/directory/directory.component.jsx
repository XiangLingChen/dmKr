import React from 'react';
import MenuItem from '../directory-item/directory-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector';

import './directory.style.css';

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {
            sections.map(({id, title, imageUrl}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl}/>
            ) )
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);