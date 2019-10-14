import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import MenuItem from '../../components/directory-item/directory-item.component';
import {selectdirectoriesPreview} from '../../redux/directory/bestSellers.selector';

import './directory-preview.style.css';

const DirectoryPreview = ({directories}) => (
    <div className='directory-preview-container'>
 
            {
                directories.map(({id, ...otherDirectoryProps})=> (
                    <MenuItem key={id} {...otherDirectoryProps}/>
                ))
            }
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    directories : selectdirectoriesPreview
});

export default connect(mapStateToProps)(DirectoryPreview);