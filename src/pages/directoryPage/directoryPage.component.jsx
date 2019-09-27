import React from 'react';
import DirectoryHeader from '../../components/directory-header/directory-header.component';
import Directory from '../../components/directory/directory.component';
import './directoryPage.style.css';

const DirectoryPage = () => (
    <div className="directory-page-container">
        <DirectoryHeader />
        <Directory/>
    </div>
);
export default DirectoryPage;